import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../Redux/Slice";
import { Link } from "react-router-dom";

export default function HomePage() {
  const dispatch = useDispatch();

  const datas = useSelector((state) => {
    console.log("State..", state.app);
    return state.app;
  });

  const deleteHandle = async (id) => {
    let result = await fetch(`http://localhost:5000/api/user/${id}`, {
      method: "DELETE",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    getAllData();
  };

  return (
    <div>
      <button
        onClick={() => dispatch(getAllData())}
        className="mb-2 me-2 mt-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        Show User's
      </button>
      <Link to="/adduser">
        <button className="mb-2 me-2 mt-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
          Add New User
        </button>
      </Link>
      <table className="w-full  text-gray-500  dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-2 py-3">S No.</th>
            <th className="px-2 py-3">First Name</th>
            <th className="px-2 py-3">Last Name</th>
            <th className="px-2 py-3">Email</th>
            <th className="px-2 py-3">Mob</th>
            <th className="px-2 py-3">Add1</th>
            <th className="px-2 py-3">Add2</th>
            <th className="px-2 py-3">City</th>
            <th className="px-2 py-3">State</th>
            <th className="px-2 py-3">Country</th>
            <th className="px-2 py-3">ZipCode</th>
            <th className="px-2 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.users.map((ob, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{ob.FirstName}</td>
              <td>{ob.LastName}</td>
              <td>{ob.email}</td>
              <td>{ob.mobile}</td>
              <td>{ob.add1}</td>
              <td>{ob.add2}</td>
              <td>{ob.city}</td>
              <td>{ob.state}</td>
              <td>{ob.country}</td>
              <td>{ob.zipcode}</td>
              <td>
                <button
                  onClick={() => deleteHandle(ob._id)}
                  className="mb-2 me-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Delete
                </button>
                &nbsp;
                <Link to={"/user/" + ob._id}>
                  <button className="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
