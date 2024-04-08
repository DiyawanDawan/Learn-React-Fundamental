import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AoutLayout from "../components/Layouts/Auth/OutsLayout";

const LoginPage = () => {
  return (
    <AoutLayout titel="LogIn">
      <FormLogin />
      <p className="mt-3 py-3 text-sm text-center">
        Dont&apos;t an have account? {" "}
        <Link className="text-blue-700 text-underline" to="/register">
          Sign Up
        </Link>
      </p>
    </AoutLayout>
  );
};

export default LoginPage;
