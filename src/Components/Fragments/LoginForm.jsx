import InputForm from "../Elements/inputan/Index";
import Button from "../UI/button";

const LoginForm = () => {
  return (
    <form action="">
      <InputForm label="Email" type="email" placeholder="example@mail.com" name="email"></InputForm>
      <InputForm label="Password" type="password" placeholder="****" name="password"></InputForm>
      <Button classname="bg-red-600 w-full ">Login</Button>
    </form>
  );
};
export default LoginForm;
