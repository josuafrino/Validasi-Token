import AuthLayout from "../Components/Layouts/AuthLayout";
import RegisterForm from "../Components/Fragments/RegisterForm";
import Register1 from "../Components/Fragments/register1";

const RegisterPages = () => {
  return (
    <AuthLayout title="Register" type="register">
      <RegisterForm />
      {/*
      <Register1 />
       */}
    </AuthLayout>
  );
};

export default RegisterPages;
