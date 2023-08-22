import { useApi } from "hooks/useApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const usePostAuthSignup = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { request } = useApi();

  const redirectToSignin = () => {
    navigate("/signin");
  };
  const displayError = () => {
    setMessage("다시 확인해주세요.");
  };
  const signup = (email: string, password: string) => {
    request("post", "/auth/signup", {
      data: { email, password },
      onSuccess: redirectToSignin,
      onError: displayError,
    });
  };

  return { signup, message };
};
