const ContactMap = () => {
    return (
        <div className="card shadow-sm h-100">
            <div className="card-body p-0">
                <iframe
                    title="Institute Location"
                    src="https://www.google.com/maps?q=Shivshakti+Computer+Academy&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '350px' }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    )
}

export default ContactMap
