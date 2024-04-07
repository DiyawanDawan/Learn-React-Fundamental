// import LoginPage from "./pages/login";
import ListNavItem from "./components/Fragments/ListNavItem";
import RegisterPage from "./pages/register";

// Function  Componen
function App() {
  return (
    <div className=" mx-auto">
    <ListNavItem />
      <div className="flex justify-center text-tahiti min-h-screen items-center">
        <RegisterPage></RegisterPage>
      </div>
    </div>
  );
}

export default App;
