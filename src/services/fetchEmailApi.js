function sendMail({name, email, message}){
  return fetch('api/email', {
    method: 'post',
    body: JSON.stringify({name, email, message}),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(res => res.json())
}

export { sendMail }