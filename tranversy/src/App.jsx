import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Hero from "./components/Hero";
import HomeCard from "./components/HomeCard";
import JobListings from "./components/JobListings";

import Navbar from "./components/Navbar";
import ViewAllJobs from "./components/ViewAllJobs";
const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>Hay App </h1>} />)
)


const App = () => {
  return (
    <RouterProvider router={router}/>
    // <>
    //   <Navbar />
    //   <Hero />
    //   <HomeCard />
    //   <JobListings />
    //   <ViewAllJobs />
    // </>
  )
}

export default App