const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="bg-light py-4 border-bottom">
      <div className="container">
        <h2 className="fw-bold mb-1">{title}</h2>
        <p className="text-muted mb-0">{subtitle}</p>
      </div>
    </section>
  )
}

export default PageHeader
