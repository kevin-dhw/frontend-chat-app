import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import useUserStore from "../../store/useUserStore";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useUserStore();

  const [data, setData] = useState<Record<string, any>>({
    state: "create",
  });
  const [inputData, setInputData] = useState({
    fullName: "",
    email: "",
    password: "",
    bio: "hello node",
  });

  const handleLoginCreate = async () => {
    if (data.state === "create") {
      const res = await axios.post("/api/auth/signup", inputData);
      console.log(res, "res");
    } else {
      const param = {
        email: inputData.email,
        password: inputData.password,
      };
      const result = await axios.post("/api/auth/login", param);
      console.log(result, "result");
      if (result.data.success) {
        setUserInfo?.(result.data.userData);
        localStorage.setItem("name", result.data.userData.fullName);
        navigate("/home", { state: { data: result.data.userData } });
      }
    }
  };
  return (
    <div className=" flex h-screen w-screen">
      <div className=" m-auto border w-[300px] h-[500px] rounded-lg py-[20px] px-[20px]">
        <div> {data.state == "login" ? "sign in" : "sign up"}</div>
        {data.state === "create" && (
          <div className=" mt-[20px]">
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputData((pre) => {
                  return { ...pre, fullName: e.target.value };
                });
                console.log(inputData, "inputData");
              }}
              placeholder="full name"
              className=" outline-none border rounded-lg w-full py-[4px] px-[10px]"
            ></input>
          </div>
        )}
        <div className=" mt-[20px]">
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputData((pre) => {
                return { ...pre, email: e.target.value };
              });
              console.log(inputData, "inputData");
            }}
            placeholder="email address"
            className=" outline-none border rounded-lg w-full py-[4px] px-[10px]"
          ></input>
        </div>
        <div className=" mt-[20px]">
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputData((pre) => {
                return { ...pre, password: e.target.value };
              });
              console.log(inputData, "inputData password");
            }}
            placeholder="password"
            className=" outline-none border rounded-lg w-full py-[4px] px-[10px]"
          ></input>
        </div>
        <div className=" mt-[20px]">
          <Button onClick={handleLoginCreate}>
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
