import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Invoice from "./components/Invoice";
import Home from "./components/Home";
import Contact from "./components/Contact";
import InvoiceDetail from "./components/InvoiceDetail";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("=============location: ", { location });

  return (
    <div className="App">
      <h1>Bookkeeper</h1>
      <nav className="nav">
        <Link to="/home">Home</Link> |<Link to="/contact">Contact</Link> |
        <Link to="/invoice">Invoice</Link>
      </nav>
      <br />
      <button
        className="buttonHome"
        type="button"
        onClick={() => {
          navigate("/home");
        }}
      >
        Test Navigate Home
      </button>
      <hr />

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="invoice" element={<Invoice />}>
          <Route index element={<div>Select an invoice</div>} />
          <Route path=":invoiceId" element={<InvoiceDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
