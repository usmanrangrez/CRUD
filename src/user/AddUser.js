import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = ({}) => {
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const data = {
    name: names,
    email: email,
    phone: phone,
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3001/users`, data);
      navigate("/");
    } catch (error) {
      console.log("Some Error In Addition");
    }
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
              setNames(e.target.value);
            }}
            className="mt-3 w-[450px] h-[50px] border-2 border-solid border-black"
            type="text"
            placeholder="Enter Your Name"
            value={names}
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
            onClick={handleSubmit}
            className=" bg-cyan-400 text-green mt-3 w-[450px] h-[50px] border-2 border-solid border-black"
          >
            Add User
          </button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
