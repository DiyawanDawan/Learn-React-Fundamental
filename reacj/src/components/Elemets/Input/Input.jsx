const Input = (prop) => {
    const {type,  name, placeholder} = prop;
    return (
        <input type={type} className="text-sm border rounded py-2 w-full text-slate-700 placeholder opacity-70 mt-1 px-3 bg-white border shadow-sm border-slate-400 placeholder-slate-400 focus:outline-none focus:border-sky-700 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder={placeholder}  name={name} id={name} />
    )
}


export default Input