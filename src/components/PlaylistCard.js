import React, {useState} from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Grid} from "@mui/material";
import styled from "@emotion/styled/macro";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import ManagePlaylist from "./playlist/ManagePlaylist";

const Hover = styled.div({
    opacity: 0,
    transition: "opacity 350ms ease",
    height: "100%",
    left: "0",
    position: "absolute",
    top: "0",
    width: "100%",
    zIndex: 2,
    background: "rgba(0,0,0,0.32)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    '&:hover': {
        opacity: 1,
        transform: "translate3d(0,0,0)",
    }
});

const SubTitle = styled.h4({
    fontFamily: "Helvetica",
    transform: "translate3d(0,50px,0)",
    transition: "transform 350ms ease",
    textAlign: 'center',
    color: 'white',

});

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

const PlaylistCard = ({info}) => {

    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };
    const handleMouseLeave = () => {
        setHover(false);
    };

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <>
            <Card sx={{width: 200, height: 200}}
                  className={`${hover ? 'shadow' : 'shadow-sm'} my-3 bg-body rounded mx-3`}
                  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <CardActionArea sx={{width: '100%', height: '100%'}} onClick={handleOpenModal}>
                    <CardMedia
                        component="img"
                        height="100%"
                        width="100%"
                        image={info.image}
                        alt="Card Image"
                    />
                    <Hover>
                        <SubTitle>{info.name}</SubTitle>
                    </Hover>
                </CardActionArea>
            </Card>

            {/* Start manage playlist modal */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <Box sx={modalStyle}>
                        <ManagePlaylist id={info.id}/>
                    </Box>
                </Fade>
            </Modal>
            {/* End manage playlist modal */}


        </>

    )
}

export default PlaylistCard