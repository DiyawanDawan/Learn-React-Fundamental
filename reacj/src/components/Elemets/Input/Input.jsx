import { forwardRef } from "react"

const Input = forwardRef( (prop, ref) => {
    const {type,  name, placeholder} = prop;
    return (
        <input type={type} className="text-sm  py-2 w-full text-slate-700 placeholder opacity-70 mt-1 px-3 bg-white border shadow-sm border-slate-400 placeholder-slate-400 focus:outline-none focus:border-sky-700 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" placeholder={placeholder}  name={name} id={name} ref={ref} />
    )
})

Input.displayName = "Input"


export default Input