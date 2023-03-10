import { sendEmail } from '../src/services/sendmail.js'

export default function handler(request, response) {

  const {name, email, message} = request.body
  const apikey = process.env.SENDGRID_API_KEY
  // const apikey = 'bf7e784c62bc6b54e438450915009443-5e7fba0f-4c53e6f0'


  sendEmail({ apikey, name, email, message })
    .then(() => {
      console.log('mail ENVIADO!')
      response.status(200).json({status:'sent', name, email, message})
    })
    .catch(error => response.status(200).json({status: 'error', error}))

}
