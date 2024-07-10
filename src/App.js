import {Route, Routes} from "react-router-dom";
import './css/all.css';
import Adminlogin from "./pages/Adminlogin";
import Adminhomepage from "./pages/Adminhomepage";
import Authors from "./pages/Authors";
import Books from "./pages/Books";
import Genres from "./pages/Genres";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={< Adminlogin />} />
        <Route path="/adminhomepage" element={< Adminhomepage/>} >
        <Route path="home" element={< Home/>} />
          <Route path="authors" element={< Authors/>} />
          <Route path="books" element={< Books/>} />
          <Route path="genres" element={< Genres/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
