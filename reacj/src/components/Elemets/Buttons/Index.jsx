// Arrow Function Componen + propertis
const Button = (props) => {
  // console.log(props);
  // eslint-disable-next-line react/prop-types
  const { classname = "bg-blue-900 w-full", children = "...", onClick = () => {}, type="button" } = props
  return (
    <button type={type} onClick={() => {onClick()}} className={` rounded-md p-2.5 ${classname}  text-slite-500 text-neutral-50 active:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500`}>
      {children}
    </button>
  )
}

export default Button