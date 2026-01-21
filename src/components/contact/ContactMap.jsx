const ContactMap = () => {
  return (
    <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden">
      <div className="card-body p-0">
        <iframe
          title="Shivshakti Computer Academy Location"
          src="https://www.google.com/maps?q=Shivshakti+Computer+Academy&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '360px' }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default ContactMap
