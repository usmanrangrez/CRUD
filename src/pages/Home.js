import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/users");
      setUsers(response.data.reverse());
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [users]);

  const handleDelete = async (ID) => {
    try {
      await axios.delete(`http://localhost:3001/users/${ID}`);
      fetchData(); //
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  return (
    <div className="w-full h-full flex flex-col px-10 py-8">
      <div className="w-full flex flex-col min-h-[50vh] justify-center items-center">
        <h1 className="text-3xl font-semibold font-sans text-black">
          Home Page
        </h1>
        <table className=" w-[95%] overflow-hidden  text-center border border-black ">
          <thead className="border-b bg-gray-800 ">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                #
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                Name
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                Email
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                Phone
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="bg-white border-b">
                <td
                  className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap
              "
                >
                  {index + 1}
                </td>

                <td
                  className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap
              "
                >
                  {user.name}
                </td>
                <td
                  className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap
              "
                >
                  {user.email}
                </td>
                <td
                  className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap
              "
                >
                  {user.phone}
                </td>
                <td
                  className="flex space-x-4 items-center justify-center mt-3
              "
                >
                  <Link
                    to={`users/${user.id}`}
                    className="px-5 py-2 text-white bg-black rounded-lg"
                  >
                    View
                  </Link>
                  <Link
                    to={`/edit-user/${user.id}`}
                    className="px-6 py-2 text-white bg-blue-600 rounded-lg"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="px-6 py-2 text-white bg-red-600 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
