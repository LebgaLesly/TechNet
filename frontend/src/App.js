import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './Hooks/useAuthContext';

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

function App() {
  const { user } = useAuthContext()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={user ? <Home /> : <Navigate to='login' />} />
          <Route path="product" element={<Product />}>
            <Route index element={<ApplePhone />} />
            <Route path="samsungphone" element={<SamsungPhone />} />
            <Route path="hisensetv" element={<HisenseTv />} />
            <Route path="samsungtv" element={<SamsungTv />} />
          </Route>
          <Route path="articles" element={<Articles />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={!user ? <Signup /> : <Navigate to='/' />} />
          <Route path="login" element={!user ? <Login /> : <Navigate to='/' />} />
        </Route >
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
