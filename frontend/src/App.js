// Components import
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';

// layouts import
import PageLayout from './Layouts/PageLayout';
// Components import
import Home from './Components/Home components/Home';
import Product from './Components/Product components/Product';
import Articles from './Components/Articles components/Articles';
import About from './Components/About components/About';
import Contact from './Components/Contact components/Contact';
import ApplePhone from './Components/Product components/Sub-FP/ApplePhone';
import SamsungPhone from './Components/Product components/Sub-FP/SamsungPhone';
import HisenseTv from './Components/Product components/Sub-FP/HisenseTv';
import SamsungTv from './Components/Product components/Sub-FP/SamsungTv';
import Signup from './Components/Authentication/Signup';
import Login from './Components/Authentication/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<PageLayout />}>
      <Route index element={<Home />} />
      <Route path="product" element={<Product />}>
        <Route index element={<ApplePhone />} />
        <Route path="samsungphone" element={<SamsungPhone />} />
        <Route path="hisensetv" element={<HisenseTv />} />
        <Route path="samsungtv" element={<SamsungTv />} />
      </Route>
      <Route path="articles" element={<Articles />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
    <Route path="signup" element={<Signup />} />
    <Route path="login" element={<Login />} />
    </Route>
    
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
