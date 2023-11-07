import Header from "./components/Navbar/Header"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from "./routes/AppRoutes";

import { Suspense } from "react";
import Loader from "./components/Loader/Loader";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
function App() {

  return (
    <>
      <ToastContainer />
      <Router>
        <Header />
        <Container style={{ minHeight: '100vh', minWidth: '100%', padding: '0' }}>
          <Suspense fallback={<Loader />}>
            <AppRoutes />
          </Suspense>
        </Container>
        <Footer />
      </Router>
    </>
  )
}

export default App
