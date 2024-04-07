import Button from "./components/Elemets/Buttons/Index";

// Function  Componen
function App() {
  return (
    <div className="flex justify-center text-tahiti min-h-screen items-center bg-lime-100">
      <div className="flex gap-x-8">
        <Button variantBg="bg-amber-900">Close menu</Button>
        <Button variantBg="bg-cyan-900" >Open Menu</Button>
        <Button ></Button>
      </div>
    </div>
  );
}

export default App;
