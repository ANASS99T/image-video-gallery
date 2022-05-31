import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Photos from "./pages/Photos";
import Videos from "./pages/Videos";


function App() {
  return (
      <div className='App'>
        <Navbar />
        <Routes>

          <Route path='/' element={<Photos />} />
          <Route path='/videos' element={<Videos />} />



        </Routes>
      </div>
  );
}

export default App;
