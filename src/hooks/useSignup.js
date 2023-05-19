import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const useSignUp = (props) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [success, setSuccess] = useState(null);

  const { dispatch } = useAuthContext();

 
  const signup = async (data) => {
    setError(null);
    setLoading(true);
    try {
      const response = await axios.post(
        `https://caroapp-2sc7.onrender.com/api/user/register`,
        data
      );
      const res = response.data;
      setLoading(false);

      setSuccess("User Created Successfully");

      localStorage.setItem("user", JSON.stringify(res));

      localStorage.setItem("user", JSON.stringify(res));

      dispatch({ type: "LOGIN", payload: res });
      setLoading(false);
      navigate("/");
    } catch (error) {
      const res = error.response;
      setLoading(false);
      setError(res.data);
      console.log(res.data);
    } finally {
      setLoading(false);
    }
  };
  return { signup, loading, error,success,setError };
};

export default useSignUp;
