import React, {useEffect, useState} from 'react';

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Modal from '@mui/material/Modal';
import ReactPlayer from 'react-player'
import Container from "@mui/material/Container";
import {videos} from '../data/videos'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "auto",
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    // p: 4,
};

function Videos() {


    const [open, setOpen] = useState(false);

    const [url, setUrl] = useState(null)

    const breakpoints = {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
    }

    const getColumns = (width) => {
        if (width < breakpoints.sm) {
            return 1
        } else if (width < breakpoints.md) {
            return 2
        } else if (width < breakpoints.lg) {
            return 3
        } else if (width < breakpoints.xl) {
            return 4
        } else {
            return 6
        }
    }

    const [columns, setColumns] = useState(getColumns(window.innerWidth))

    const updateDimensions = () => {
        setColumns(getColumns(window.innerWidth))
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return <Container>
        <Box sx={{width: "100%", overflowY: 'scroll'}}>
            <ImageList variant="masonry" cols={columns} gap={8}>
                {videos.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            onClick={() => {
                                handleOpen();
                                setUrl(item.video)
                            }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <ReactPlayer
                    url={url}
                    playing={true}
                    controls={true}
                />
            </Box>
        </Modal>
    </Container>;
}

export default Videos;