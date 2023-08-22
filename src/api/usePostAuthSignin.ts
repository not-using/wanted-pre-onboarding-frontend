import { useApi } from "hooks/useApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const usePostAuthSignin = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { request } = useApi();

  const saveTokenAndRedirect = (response: any) => {
    localStorage.setItem("token", response.data.access_token);
    navigate("/todo");
  };

  const displayError = () => {
    setMessage("다시 확인해주세요.");
  };

  const signin = (email: string, password: string) => {
    request("post", "/auth/signin", {
      data: { email, password },
      onSuccess: saveTokenAndRedirect,
      onError: displayError,
    });
  };

  return { signin, message };
};
