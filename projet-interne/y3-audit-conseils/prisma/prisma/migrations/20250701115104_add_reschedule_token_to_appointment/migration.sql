-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN "rescheduleToken" TEXT;
ALTER TABLE "Appointment" ADD COLUMN "rescheduleTokenCreatedAt" DATETIME;
