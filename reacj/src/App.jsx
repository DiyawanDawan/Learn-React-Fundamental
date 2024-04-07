import React from "react";


// Craate Class Componen
class Button extends React.Component {
  render() {
    return (
      <button type="button" className="-m-2.5 rounded-md p-2.5 bg-amber-900  text-slite-500 text-neutral-50">
        Close menu
      </button>
    )
  }
}

// Function Compoenen
function ButtonRen() {
  return (
    <button type="button" className="-m-2.5 rounded-md p-2.5 bg-amber-900  text-slite-500 text-neutral-50">
      Close menu
    </button>
  )
}

// Arrow Function Componen
const ButtonArrow = () => {
  return (
    <button type="button" className="-m-2.5 rounded-md p-2.5 bg-amber-900  text-slite-500 text-neutral-50">
      Close menu
    </button>
  )
}

// Function  Componen
function App() {
  return (
    <div className="flex justify-center text-tahiti min-h-screen items-center bg-lime-100">
      <div className="flex gap-x-8">
        <Button />
        <ButtonRen />
        <ButtonArrow />
      </div>
    </div>
  );
}

export default App;
