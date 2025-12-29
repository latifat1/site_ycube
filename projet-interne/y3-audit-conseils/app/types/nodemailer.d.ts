declare module 'nodemailer' {
  export interface Transporter {
    sendMail(mailOptions: any): Promise<any>;
  }

  export function createTransport(config: any): Transporter;

  export default {
    createTransport,
  };
}

