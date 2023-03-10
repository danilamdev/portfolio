// const SENDGRID_API_KEY = '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'
import sendgrid from '@sendgrid/mail'


export function sendEmail({apikey, name, email, message}){

  sendgrid.setApiKey(apikey)

  const msg = {
    to: 'dalambarri@gmail.com', // Change to your recipient
    from: 'dalambarri@live.com', // Change to your verified sender
    subject: `PORTFOLIO mensaje | from ${name} - ${email}`,
    text: 'prueba de email',
    html: `
      <h1>Nuevo mensaje en el portfolio</h1>
      <p>nombre: ${name}</p>
      <p>email: ${email}</p>
      <h2 style="color:MediumSlateBlue">mensaje:</h2>
      <strong>${message}</strong>
    `,
  }

  return sendgrid.send(msg)
    
}
