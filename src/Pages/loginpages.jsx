import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../Components/Layouts/AuthLayout";
import LoginForm from "../Components/Fragments/LoginForm";
import validateToken from "./validatetoken";

const LoginPages = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = validateToken();
    if (token && token !== "null") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <AuthLayout title="login" type="login">
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPages;
