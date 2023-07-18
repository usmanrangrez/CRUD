import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const Navigate = useNavigate();

  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.log("error");
      }
    };
    fetchData();
  }, []);

  console.log(user);
  return (
    <div className="w-full h-full flex justify-center items-center min-h-[30vh]  ">
      {user ? (
        <>
          <div>
            <Link
              onClick={() => {
                Navigate(-1);
              }}
              className="bg-black text-white flex items-center justify-center px-4 py-2 mt-12 rounded-lg"
            >
              Back
            </Link>
            <div className="w-[700px] h-[200px] px-6 bg-zinc-200 flex border-black mt-16  ">
              <div className="w-5/12 flex flex-col  justify-center ">
                <h2 className="text-black font-semibold font-mono text-2xl space-y-4 border-b border-black">
                  Name
                </h2>

                <h2 className="text-black font-semibold font-mono text-2xl border-b border-black">
                  Email
                </h2>
                <h2 className="text-black font-semibold font-mono text-2xl space-y-4 border-b border-black ">
                  Phone
                </h2>
              </div>

              <div className="w-7/12 flex flex-col  justify-center ">
                <h2 className="text-black font-semibold font-mono text-2xl space-y-4 border-b border-black">
                  {user.name}
                </h2>
                <h2 className="text-black font-semibold font-mono text-2xl space-y-4 border-b border-black">
                  {user.email}
                </h2>
                <h2 className="text-black font-semibold font-mono text-2xl space-y-4 border-b border-black ">
                  {user.phone}
                </h2>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default User;
