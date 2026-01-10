const WhatsAppButton = () => {
  const phoneNumber = '919000000000' // country code ke saath
  const message = 'Hello, I want to know more about courses.'

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="/whatsapp.png"
        alt="WhatsApp"
        width="48"
        height="48"
      />
    </a>
  )
}

export default WhatsAppButton
