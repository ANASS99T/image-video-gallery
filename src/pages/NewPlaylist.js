import React from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {Card, CardActionArea, CardContent, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import AddIcon from '@mui/icons-material/Add';
import IconButton from "@mui/material/IconButton";
import PlaylistCard from "../components/PlaylistCard";

import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import AddPlaylistChoice from "../components/playlist/AddPlaylistChoice";


const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs: '90%', md: '50%'},
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    p: 0,

};

const NewPlaylist = ({playlist, setPlaylist}) => {

    const [openNewModal, setOpenNewModal] = React.useState(false);
    const handleOpenNewModal = () => setOpenNewModal(true);
    const handleCloseNewModal = () => setOpenNewModal(false);

    return (
        <Container className=" shadow-sm p-3 my-5 bg-body rounded" sx={{background: "white"}}>

            <Box sx={{
                display: "flex",
                alignItems: 'center',
                justifyContent: {md: 'flex-start', xs: 'center'},
                flexWrap: 'wrap'
            }}>
                <Card sx={{width: 200, height: 200}} className={"shadow my-3 bg-body rounded mx-3"}>
                    <CardActionArea sx={{width: '100%', height: '100%'}} onClick={handleOpenNewModal}>
                        <CardContent sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <AddIcon color="info" sx={{fontSize: 70}}/>
                        </CardContent>
                    </CardActionArea>
                </Card>

                {
                    playlist.map((item, index) => (
                        <PlaylistCard info={item} key={index}/>
                    ))
                }
            </Box>


            {/* Start add playlist modal */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openNewModal}
                onClose={handleCloseNewModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openNewModal}>
                    <Box sx={modalStyle}>
                        <AddPlaylistChoice />
                    </Box>
                </Fade>
            </Modal>
            {/* End add playlist modal */}


        </Container>
    )

}

export default NewPlaylist;