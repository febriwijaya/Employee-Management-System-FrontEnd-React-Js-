import React, { useState } from "react";

const DepartmentComponent = () => {
  const [departmentName, setDepartmentName] = useState("");
  const [departmentDescription, setDepartmentDescription] = useState("");

  function saveDepartment(e) {
    e.preventDefault();

    const department = { departmentName, departmentDescription };
    console.log(department);
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add Department</h2>

          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Department Name :</label>
                <input
                  type="text"
                  name="departmentName"
                  placeholder="Enter Department Name"
                  value={departmentName}
                  onChange={(e) => setDepartmentName(e.target.value)}
                  className="form-control"
                />
              </div>
            </form>
          </div>

          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Department Description :</label>
                <input
                  type="text"
                  name="departmentDescription"
                  placeholder="Enter Department Description"
                  value={departmentDescription}
                  onChange={(e) => setDepartmentDescription(e.target.value)}
                  className="form-control"
                />
              </div>
              <button
                className="btn btn-success mb-2"
                onClick={(e) => saveDepartment(e)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentComponent;
