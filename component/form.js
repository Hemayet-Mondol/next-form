import React, { useState } from "react";

export default function EmployeeForm() {
  const [checked, setchecked] = useState(false);
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    file: "",
    isAgree: "",
  });
  const handleChange = async (e) => {
    if (e.target.type === "file") {
      const file = await e.target.files[0];
      setEmployee({ ...employee, [e.target.name]: file });
    } else {
      setEmployee({ ...employee, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(employee);
    // handle form submisson here
  };
  const checkEnable = (e) => {
    setchecked(e.target.checked);
    handleChange(e);
  };

  return (
    <>
      <div className="container-sm mt-5">
        <div className="col-md-6 border border-1 rounded p-5 mx-auto">
          <h1 className="text-center mb-3">Form Data</h1>

          <form className="was-validated" onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="mb-3">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  placeholder="first-name"
                  required
                  value={employee.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="mb-3">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="last-name"
                  name="lastName"
                  required
                  value={employee.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="email" className="mb-3">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="email"
                  name="email"
                  required
                  employee={employee.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="dateOfBirth" className="mb-3">
                  Date of birth
                </label>

                <input
                  type="date"
                  className="form-control"
                  data-date-format="dd/mm/yyyy"
                  name="dateOfBirth"
                  employee={employee.dateOfBirth}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="mb-3">
                <label htmlFor="dateOfBirth" className="mb-3">
                  Upload File
                </label>
                <input
                  type="file"
                  className="form-control"
                  name="file"
                  employee={employee.file}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={checkEnable}
                  type="checkbox"
                  className="form-check-input mx-3"
                  name="isAgree"
                  employee={employee.isAgree}
                />
                <label htmlFor="isAgree" className="form-check-label">
                  I Agree
                </label>
              </div>
              <button
                disabled={!checked}
                type="submit"
                className="btn btn-success"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
