// import ListNavItem from "../../Fragments/ListNavItem";
import NavigationAuth from "../../Fragments/NavigationAuth";

const AoutLayout = (prop) => {
    const { children, titel, type } = prop;
    console.log(prop.children);
    // console.log(prop);
    return (
        <>
            {/* <ListNavItem/> */}
            <div className="flex justify-center text-tahiti min-h-screen items-center">
                <div className="w-full max-w-xs">
                    <h1 className="text-blue-600 text-3xl mb-3 font-bold mb-3" > {titel} </h1>
                    <p className="font-medium text-slate-500">Welcome please enter your details</p>
                    {children}
                    <NavigationAuth type={type} />
                </div>
            </div>
        </>
    )
}


export default AoutLayout