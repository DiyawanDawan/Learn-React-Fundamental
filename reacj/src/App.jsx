/* eslint-disable react/prop-types */
// import React from "react";

import { Children } from "react";


// // Craate Class Componen
// class Button extends React.Component {
//   render() {
//     return (
//       <button type="button" className="-m-2.5 rounded-md p-2.5 bg-amber-900  text-slite-500 text-neutral-50">
//         Close menu
//       </button>
//     )
//   }
// }

// // Function Compoenen
// function ButtonRen() {
//   return (
//     <button type="button" className="-m-2.5 rounded-md p-2.5 bg-amber-900  text-slite-500 text-neutral-50">
//       Close menu
//     </button>
//   )
// }

// Arrow Function Componen
// const ButtonArrow = () => {
//   return (
//     <button type="button" className="-m-2.5 rounded-md p-2.5 bg-amber-900  text-slite-500 text-neutral-50">
//       Close menu
//     </button>
//   )
// }


// Arrow Function Componen + propertis
const Button = (props) => {
  // console.log(props);

  // Defaullt Value
  const {variantBg = "bg-blue-900", children = "..."} = props
  return (
    // <button type="button" className={`-m-2.5 rounded-md p-2.5 ${props.variantBg}  text-slite-500 text-neutral-50`}>
    //   {props.children}
    // </button>



    <button type="button" className={`-m-2.5 rounded-md p-2.5 ${variantBg}  text-slite-500 text-neutral-50`}>
      {children}
    </button>
  )
}


// Function  Componen
function App() {
  return (
    <div className="flex justify-center text-tahiti min-h-screen items-center bg-lime-100">
      <div className="flex gap-x-8">
        {/* <Button />
        <ButtonRen />
        <ButtonArrow /> */}
        <Button variantBg="bg-amber-900">Close menu</Button>
        <Button variantBg="bg-cyan-900" >Open Menu</Button>
        <Button variantBg="bg-lime-800" >Sipit Menu</Button>

        {/* Defaukt Value Button Popertis */}
        <Button ></Button> 
      </div>
    </div>
  );
}

export default App;
