import React, { useState, useEffect } from "react";
import axios from "axios";
import useRedictHook from "../../hooks/useRedictHook";
import { isProperyEmpry } from "../../utils";
import { Button, Input } from "antd";

const Test: React.FC = () => {
  useRedictHook();

  const [state, setState] = useState({
    num: 0,
    state: "add",
  });
  const [data, setData] = useState<Record<string, any>>({
    name: "",
    age: "",
  });
  const [curItem, setCurItem] = useState<Record<string, any>>({});
  const [list, setList] = useState<any[]>([]);

  const getListData = () => {
    axios.post("/api/test/list").then((res) => {
      console.log(res, "listres");
      setList(res.data.data);
    });
  };

  useEffect(() => {
    getListData();
  }, []);

  return (
    <div className=" h-[100vh]">
      <div className=" text-white">selecttest</div>
      <br />
      <Button
        onClick={async () => {
          const flag = isProperyEmpry(data);
          if (flag) {
            const res = await axios.post("/api/test/create", data);
            if (res.data.success) {
            }
          }
          await getListData();
          setData({ name: "", age: "" });
        }}
      >
        添加
      </Button>
      <div className=" flex flex-col">
        <Input
          value={data.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setData((pre) => {
              return { ...pre, name: e.target.value };
            });
          }}
          style={{ width: 200 }}
        ></Input>
        <Input
          value={data.age}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setData((pre) => {
              return { ...pre, age: e.target.value };
            });
          }}
          style={{ width: 200 }}
        ></Input>
      </div>
      <div>
        <div>
          {list.map((item, idx) => {
            return (
              <div key={idx}>
                <span className=" mr-[20px]">
                  名字： {item.name} ， 年龄： {item.age}
                </span>
                <Button
                  onClick={() => {
                    setState({ num: idx, state: "edit" });
                    setData({ name: item.name, age: item.age });
                    setCurItem(item);
                  }}
                >
                  编辑
                </Button>
                <Button
                  onClick={async () => {
                    const res = await axios.post("/api/test/delete", {
                      id: item._id,
                    });
                    console.log(res, "delete res");
                    await getListData();
                  }}
                >
                  删除
                </Button>
                {idx === state.num && state.state === "edit" && (
                  <Button
                    onClick={async () => {
                      setState({ num: 0, state: "add" });
                      const param = {
                        name: data.name,
                        age: data.age,
                        id: curItem._id,
                      };
                      const res = await axios.post("/api/test/update", param);
                      if (res.data.success) {
                        console.log("update successfully");
                      }
                      await getListData();
                    }}
                  >
                    确认
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Test;
