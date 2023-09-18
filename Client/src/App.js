// Components import
import { createBrowserRouter, RouterProvider, Route,createRoutesFromElements } from "react-router-dom";


// layouts import
import PageLayout from "./Layouts/PageLayout";
import Home from "./Home components/Home";
import Product from "./Product components/Product";
import Articles from "./Articles components/Articles";
import About from "./About components/About";
import Contact from "./Contact components/Contact";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<PageLayout />}>
        <Route index element={<Home />}/>
        <Route path="product" element={<Product/>} />
        <Route path="articles" element={<Articles/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
    </Route>
  )
);


function App() {
  return(
    <RouterProvider router={router} />
  )
}

export default App;
