// Import necessary components from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';  // Import Navbar component
import Homepage from './home'; // Import Course component
import './idex.css'
import Register from './register';
import Login from './loginpage';
import Dashboard from './dashboard';
function App() {
  return (
    <Router> {/* Wrap the whole app inside Router */}
      <Navbar /> {/* Navbar will be displayed on all pages */}
      
      <div className="App">
        {/* Wrap Routes inside the Router */}
        <Routes>
          {/* Define the routes for different paths */}
          <Route path="/" element={<Homepage />} />
          
          <Route path="src/register.js" element={<Register />} />
          <Route path="src/loginpage.js" element={<Login />} />
          <Route path="src/dashboard.js" element={<Dashboard />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
