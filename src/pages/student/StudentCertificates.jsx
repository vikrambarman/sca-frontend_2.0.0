const StudentCertificates = () => {
  return (
    <>
      <h5 className="fw-bold mb-3">My Certificates</h5>

      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Course</th>
            <th>Certificate No</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DCA</td>
            <td>SSCA-CERT-001</td>
            <td>
              <button className="btn btn-sm btn-success">
                Download
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default StudentCertificates
