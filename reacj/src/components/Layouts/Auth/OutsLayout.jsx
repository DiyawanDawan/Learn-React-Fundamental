import { Link } from "react-router-dom";

const AoutLayout = (prop) => {
    const { children, titel, type } = prop
    console.log(prop);
    console.log(prop);
    return (
        <div className="flex justify-center text-tahiti min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-blue-600 text-3xl mb-3 font-bold mb-3" > {titel} </h1>
                <p className="font-medium text-slate-500 ">Welcome please enter your details</p>
                {children}
                
                {/* 
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

                </p> */}



            {/* <Navigation type={type}/> */}


            <NavigationAuth type={type}/>

            </div>
        </div>
    )
}




// const Navigation = ({type}) => {
//     if (type === "Login") {
//         return (
//             <p className="mt-3 py-3 text-sm text-center">
//                 Don&apos;t an have account? {" "}
//                 <Link className="text-blue-700 text-underline" to="/register">
//                     Register
//                 </Link>
//             </p>

//         );
//     } else {
//         return (
//             <p className="mt-3 py-3 text-sm text-center">
//                 Alredy have a Account  {" "}
//                 <Link className="text-blue-700 text-underline" to="/login">
//                     Login
//                 </Link>
//             </p>
//         )

//     }
// }



const NavigationAuth = ({type}) => {
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
export default AoutLayout