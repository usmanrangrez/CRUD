import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
      } catch (error) {
        console.log("error in Edit.js");
      }
    };
    fetchData();
  }, []);

  const data = {
    name: name,
    email: email,
    phone: phone,
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/users/${id}`, data);
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h[30vh]">
        <h3>Add User</h3>
        <form
          className="flex flex-col items-center justify-center "
          onSubmit={() => null}
        >
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="mt-3 w-[450px] h-[50px] border-2 border-solid border-black"
            type="text"
            placeholder="Enter Your Name"
            value={name}
          />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="mt-3 w-[450px] h-[50px] border-2 border-solid border-black"
            type="email"
            placeholder="Enter Your Email"
            value={email}
          />
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            className="mt-3 w-[450px] h-[50px] border-2 border-solid border-black"
            type="text"
            placeholder="Enter Your Phone No"
            value={phone}
          />
          <button
            onClick={handleUpdate}
            className=" bg-cyan-400 text-green mt-3 w-[450px] h-[50px] border-2 border-solid border-black"
          >
            Update User
          </button>
        </form>
      </div>
    </>
  );
};

export default Edit;
