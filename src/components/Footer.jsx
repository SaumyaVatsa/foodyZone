import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1 font-italic">
        FoodyZone
      </Link>
      <span className="mb-3 mb-md-0 text-muted">© 2023 Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3 m-2"><Link className="text-muted" to="#">LinkedIn</Link></li>
      <li className="ms-3 m-2"><Link className="text-muted" to="#">Instagram</Link></li>
      <li className="ms-3 m-2"><Link className="text-muted" to="#">Facebook</Link></li>
    </ul>
  </footer>
    </div>
  )
}

export default Footer