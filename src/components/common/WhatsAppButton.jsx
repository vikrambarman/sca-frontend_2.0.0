const WhatsAppButton = () => {
  const phoneNumber = '919009087883' // with country code
  const message = 'Hello, I want to know more about courses.'

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with Shivshakti Computer Academy on WhatsApp"
    >
      <img
        src="/whatsapp.png"
        alt="WhatsApp icon"
        width="48"
        height="48"
      />
    </a>
  )
}

export default WhatsAppButton
