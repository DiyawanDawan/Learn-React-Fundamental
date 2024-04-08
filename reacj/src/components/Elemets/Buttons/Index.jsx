// Arrow Function Componen + propertis
const Button = (props) => {
  // console.log(props);
  // eslint-disable-next-line react/prop-types
  const { classname = "bg-blue-900", children = "..." } = props
  return (
    <button type="button" className={` rounded-md p-2.5 ${classname}  text-slite-500 text-neutral-50 active:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 w-full`}>
      {children}
    </button>
  )
}

export default Button