import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Colla from "./Pages/Colla";
import Contact from "./Pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
const logo = require('./Logo.jpg');


function App() {
  return (
    <><body>
      <div className="container">
      <p>Chef de projet digital - webmaster - développeur front-end : Angular, react, vus.js, aem<br></br>
          Directement par mail à l'adresse : <a href="mailto:djennad.ar@gmail.com.">Djennad.ar@gmail.com. </a></p>
    
        <Nav activeKey="/" onSelect={(selectedKey) => `selected ${selectedKey}`}>


        </Nav>
        <img class="log" src={logo} alt="logo"/>

        <BrowserRouter>
          <Routes>
            <Route path="portfoliov1/" element={<Home />} />home
            <Route path="/About" element={<About />} />
            <Route path="/Colla" element={<Colla />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </body><footer>
        
      </footer></>

    
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;

