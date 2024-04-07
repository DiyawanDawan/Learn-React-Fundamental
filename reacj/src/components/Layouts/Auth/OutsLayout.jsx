
const AoutLayout = (prop) => {
    const {children, titel} = prop
    console.log(prop);
    console.log(prop);
    return (
        <div className="w-full max-w-xs">
            <h1 className="text-blue-600 text-3xl mb-3 font-bold mb-3" > {titel} </h1>
            <p className="font-medium text-slate-500 ">Welcome please enter your details</p>
           {children}
        </div>
    )
}

export default AoutLayout