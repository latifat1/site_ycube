import { NextResponse } from 'next/server'
// @ts-ignore - PrismaClient will be available after generation
import { PrismaClient } from '@prisma/client'
import { sendMail } from '../utils/sendMail'
import { getAppointmentStatusTemplate } from '../utils/emailTemplates'
import crypto from 'crypto'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const { id, status, date, time } = await request.json()
  if (!id || !status) {
    return NextResponse.json({ error: 'Missing id or status' }, { status: 400 })
  }
  let updateData: any = { status }
  if (date) updateData.date = new Date(date)
  if (time) updateData.time = time

  // Génération du token pour replanification
  let rescheduleToken: string | undefined = undefined
  let rescheduleTokenCreatedAt: Date | undefined = undefined
  if (status === 'a_replanifier') {
    rescheduleToken = crypto.randomBytes(24).toString('hex')
    rescheduleTokenCreatedAt = new Date()
    updateData.rescheduleToken = rescheduleToken
    updateData.rescheduleTokenCreatedAt = rescheduleTokenCreatedAt
  } else {
    updateData.rescheduleToken = null
    updateData.rescheduleTokenCreatedAt = null
  }

  const updated = await prisma.appointment.update({
    where: { id },
    data: updateData,
  })

  // Envoi d'un email automatique selon le statut
  if (status === 'confirme' || status === 'a_replanifier' || status === 'annule') {
    const template = getAppointmentStatusTemplate({
      name: updated.name,
      service: updated.service,
      status: status,
      date: updated.date.toISOString(),
      time: updated.time,
    });

    let subject = 'Mise à jour de votre rendez-vous';
    if (status === 'confirme') {
      subject = 'Votre rendez-vous est confirmé !';
    } else if (status === 'a_replanifier') {
      subject = 'Replanification de votre rendez-vous';
    } else if (status === 'annule') {
      subject = 'Votre rendez-vous a été annulé';
    }

    await sendMail({
      to: updated.email,
      subject,
      text: template.text,
      html: template.html,
    });
  }

  return NextResponse.json(updated)
} 