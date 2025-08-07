import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedictHook = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const name = localStorage.getItem("name");
    if (!name) {
      navigate("/login");
    }
  }, []);
};

export default useRedictHook;
