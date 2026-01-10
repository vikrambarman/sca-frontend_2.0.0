import { NavLink } from 'react-router-dom'

const HomeCTA = () => {
    return (
        <section className="bg-primary text-light py-4">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                <h5 className="mb-3 mb-md-0">
                    Ready to start your journey with us?
                </h5>
                <div className="d-flex gap-2">
                    <NavLink to="/enquiry" className="btn btn-light btn-sm">
                        Enquiry Now
                    </NavLink>
                    <NavLink to="/registration" className="btn btn-outline-light btn-sm">
                        Register Online
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default HomeCTA
