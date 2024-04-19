import { Link } from "react-router-dom"

const NavigationAuth = ({ type }) => {
    return (
        <p className="mt-3 py-3 text-sm text-center">
            {
                type === 'Login' ? `Dont"t an have account? ` : "Alredy have a Account "
            }
            {
                type === 'Login' && (
                    <Link className="text-blue-700 text-underline" to="/register">
                        Register
                    </Link>
                )
            }
            {
                type === 'Register' && (
                    <Link className="text-blue-700 text-underline" to="/login">
                        Login
                    </Link>)
            }

        </p>
    )
}

export default NavigationAuth