import { Link } from "react-router-dom"
import FormRegister from "../components/Fragments/FormRegister"
import AoutLayout from "../components/Layouts/Auth/OutsLayout"

const RegisterPage = () => {
    return (
        <AoutLayout titel="Register">
            <FormRegister/>
            <p className="mt-3 py-3 text-sm text-center">
                Have an account? {" "}
                <Link className="text-blue-700 text-underline" to="/login">
                Login
                </Link>
            </p>
        </AoutLayout>
    )
}

export default RegisterPage
