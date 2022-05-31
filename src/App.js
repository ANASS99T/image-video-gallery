import React, {useState} from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Photos from "./pages/Photos";
import Videos from "./pages/Videos";
import Playlist from "./pages/Playlist";


function App() {

    const initData = [
        {
            id: 1,
            image: '',
            name: "first playlist of photos",
            type: "photos",
            photos: [],
            videos: [],
            settings: {
                autoplay: true,
                loop: true,
                fullscreen: false,
                delay: 1000,
            }

        }
    ]

    const [playlist, setPlaylist] = useState(initData)
    return (
        <div className='App'>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Photos/>}/>
                <Route path='/videos' element={<Videos/>}/>
                <Route path='/playlist' element={<Playlist playlist={playlist} setPlaylist={setPlaylist}/>}/>
            </Routes>
        </div>
    );
}

export default App;
