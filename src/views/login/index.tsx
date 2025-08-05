import React, { useState } from "react";
import axios from "axios";
import { formatTime } from "../../utils";
import { Button } from "antd";

const Login: React.FC = () => {
  const [data, setData] = useState<Record<string, any>>({
    state: "create",
  });
  return (
    <div className=" flex h-screen w-screen">
      <div className=" m-auto border w-[300px] h-[500px] rounded-lg py-[20px] px-[20px]">
        <div> {data.state == "login" ? "sign in" : "sign up"}</div>
        {data.state === "create" && (
          <div className=" mt-[20px]">
            <input
              placeholder="full name"
              className=" outline-none border rounded-lg w-full py-[4px] px-[10px]"
            ></input>
          </div>
        )}
        <div className=" mt-[20px]">
          <input
            placeholder="email address"
            className=" outline-none border rounded-lg w-full py-[4px] px-[10px]"
          ></input>
        </div>
        <div className=" mt-[20px]">
          <input
            placeholder="password"
            className=" outline-none border rounded-lg w-full py-[4px] px-[10px]"
          ></input>
        </div>
        <div className=" mt-[20px]">
          <Button
            onClick={async () => {
              const { data } = await axios.post("/api/auth/signup", {
                fullName: "123123",
                email: "1234445566",
                password: "123457888",
                bio: "1234455",
              });
              console.log(data, "data");
              console.log(formatTime(data.createdAt), "createdAt");
              console.log(formatTime(data.updatedAt), "updatedAt");
            }}
          >
            {data.state === "create" ? "create account" : "login account"}
          </Button>
        </div>
        <div className=" mt-[20px]">
          <Button
            onClick={() => {
              const state = data.state == "login" ? "create" : "login";
              setData((pre) => {
                return { ...pre, state };
              });
            }}
          >
            {data.state == "login" ? "create here" : "login here"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
