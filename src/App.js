import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from './Layout/Navbar';
import Home from "./Pages/Home";
import AddUser from "./Users/AddUser";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import EditUser from "./Users/EditUser";
import ViewUser from "./Users/ViewUser";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>  

      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/adduser" element={<AddUser/>}></Route>
        <Route exact path="/edituser/:id" element={<EditUser/>}></Route>
        <Route path='/viewuser/:id' component={ViewUser} />

      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
