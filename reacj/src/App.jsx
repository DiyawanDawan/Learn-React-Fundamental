import React from "react";


class Button extends React.Component {
  render() {
    return (
      <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700  bg-slate-800 text-neutral-50">
        Close menu
      </button>
    )
  }
}

function ButtonAmber() {
  return (
    <button type="button" className="-m-2.5 rounded-md p-2.5 bg-amber-500  text-red-500 text-neutral-50">
      Close menu
    </button>
  )
}

const ButtonSlite = () => {
  return (
    <button type="button" className="-m-2.5 rounded-md p-2.5 bg-amber-900  text-slite-500 text-neutral-50">
      Close menu
    </button>
  )
}

function App() {
  return (
    <div className="flex justify-center text-tahiti min-h-screen items-center bg-lime-100">
      <div className="flex gap-x-8">
        <Button />
        <ButtonAmber />
        <ButtonSlite />
      </div>
    </div>
  );
}

export default App;
