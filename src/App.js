import React, {useState} from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Photos from "./pages/Photos";
import Videos from "./pages/Videos";
import Playlist from "./pages/Playlist";
import EditPlaylist from "./pages/playlist/EditPlaylist";
import NewPlaylist from "./pages/NewPlaylist";
import PhotoPlaylist from "./pages/playlist/PhotoPlaylist";
import VideoPlaylist from "./pages/playlist/VideoPlaylist";
import CustomPlaylist from "./pages/playlist/CustomPlaylist";
import PlayPlaylist from "./pages/playlist/PlayPlaylist";
import {CssBaseline} from "@mui/material";


function ConfigPlaylist() {
    return null;
}

function App() {

    const initData = [
        {
            id: 1,
            image: '/images/beach_tropics_sea_sand_palm_trees_sunset_84729_1280x720.jpg',
            name: "First playlist",
            type: 1,
            photos: [
                {
                    src: "images/autumn_forest_park_128379_1280x720.jpg",
                    width: 1,
                    height: 1,
                    id: 1
                },
                {
                    src: "images/autumn_forest_trees_129892_1280x720.jpg",
                    width: 1,
                    height: 1,
                    id: 2
                },
                {
                    src: "/images/beach_tropics_sea_sand_palm_trees_sunset_84729_1280x720.jpg",
                    width: 1,
                    height: 1,
                    id: 3
                }],
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
            <CssBaseline enableColorScheme />
            <Navbar/>
            <Routes>
                <Route path='/' element={<Photos/>}/>
                <Route path='/videos' element={<Videos/>}/>
                <Route path='/playlist' element={<Playlist playlist={playlist} setPlaylist={setPlaylist}/>}/>
                <Route path='/newplaylist' element={<NewPlaylist playlist={playlist} setPlaylist={setPlaylist}/>}/>
                <Route path='/playlist/:id' element={<EditPlaylist playlist={playlist} setPlaylist={setPlaylist}/>}/>


                <Route path='/addPlaylist/photo' element={<PhotoPlaylist/>}/>
                <Route path='/addPlaylist/video' element={<VideoPlaylist/>}/>
                <Route path='/addPlaylist/custom' element={<CustomPlaylist/>}/>

                <Route path='/playlist/play/:id'
                       element={<PlayPlaylist/>}/>
                <Route path='/playlist/edit/:id'
                       element={<EditPlaylist/>}/>
                <Route path='/playlist/setting/:id'
                       element={<ConfigPlaylist/>}/>


            </Routes>
        </div>
    );
}

export default App;
