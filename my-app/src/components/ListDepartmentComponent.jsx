import React, { useEffect, useState } from "react";
import {
  deleteDepartment,
  getAllDepartments,
} from "../services/DepartmentService";
import { Link, useNavigate } from "react-router-dom";

export const ListDepartmentComponent = () => {
  const [departments, setDepartments] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    listOfDepartment();
  }, []);

  function listOfDepartment() {
    getAllDepartments()
      .then((response) => {
        console.log(response.data);
        setDepartments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function updateDepartment(id) {
    navigator(`/edit-department/${id}`);
  }

  function removeDepartment(id) {
    deleteDepartment(id)
      .then((response) => {
        console.log(response.data);
        listOfDepartment();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Departments</h2>
      <Link to="/add-department" className="btn btn-primary mb-2">
        Add Department
      </Link>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Department ID</th>
            <th>Department Name</th>
            <th>Department Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.departmentName}</td>
              <td>{department.departmentDescription}</td>
              <td>
                <button
                  onClick={() => updateDepartment(department.id)}
                  className="btn btn-info mx-2"
                >
                  Update
                </button>
                <button
                  onClick={() => removeDepartment(department.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
