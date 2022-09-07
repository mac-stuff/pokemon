import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = (setIsLogged, setLoggetinUser) => {
  const navigate = useNavigate();
  setIsLogged(false);
  setLoggetinUser({});
  navigate("/");
};

export default Logout;
