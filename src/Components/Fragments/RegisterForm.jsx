import InputForm from "../Elements/inputan/Index";
import Button from "../UI/button";

const RegisterForm = () => {
  return (
    <form action="">
      <InputForm label="Nama Lengkap" type="namalengkap" placeholder="Ketik nama lengkap anda.." name="namalengkap"></InputForm>
      <InputForm label="Email" type="email" placeholder="example@mail.com" name="email"></InputForm>
      <InputForm label="Password" type="password" placeholder="****" name="password"></InputForm>
      <InputForm label="Konfirmasi Password" type="password" placeholder="****" name="konfirmasipassword"></InputForm>
      <Button classname="bg-red-600 w-full ">Register</Button>
    </form>
  );
};
export default RegisterForm;
