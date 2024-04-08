import FormLogin from "../components/Fragments/FormLogin";
import AoutLayout from "../components/Layouts/Auth/OutsLayout";

const LoginPage = () => {
  return (
    <AoutLayout titel="LogIn" type="Login">
      <FormLogin />
     
    </AoutLayout>
  );
};

export default LoginPage;
