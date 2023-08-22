import { Navigate, Outlet } from "react-router-dom";

interface IProps {
  authenticated: "forbidden" | "allowed";
  replace: string;
}

const Protected = ({ authenticated, replace }: IProps) => {
  const token = localStorage.getItem("token");
  const isAllowedRoute = authenticated === "forbidden" ? !token : !!token;

  return isAllowedRoute ? <Outlet /> : <Navigate to={replace} />;
};

export default Protected;
