import React, {useState} from 'react';

// import ImageGallery from 'react-image-video-gallery';
// import "react-image-video-gallery/styles/css/image-gallery.css";

// import Gallery from "react-photo-gallery-react17";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReactPlayer from 'react-player'

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

    const itemData = [
        {
            img: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
            title: "test",
            video: "/videos/SampleVideo_720x480_1mb.mp4"
        },
        {
            img: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
            title: "test",
            video: "/videos/SampleVideo_1280x720_30mb.mp4"
        },
        {
            img: "https://source.unsplash.com/qDkso9nvCg0/600x799",
            title: "test",
            video: "/videos/SampleVideo_1280x720_20mb.mp4"
        },
        {
            img: "https://source.unsplash.com/iecJiKe_RNg/600x799",
            title: "test",
            video: "/videos/SampleVideo_1280x720_20mb.mp4"
        },
        {
            img: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
            title: "test",
            video: "/videos/SampleVideo_1280x720_20mb.mp4"
        },
        {
            img: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
            title: "test",
            video: "/videos/SampleVideo_1280x720_20mb.mp4"
        },
        {
            img: "https://source.unsplash.com/zh7GEuORbUw/600x799",
            title: "test",
            video: "/videos/SampleVideo_1280x720_20mb.mp4"
        },
        {
            img: "https://source.unsplash.com/PpOHJezOalU/800x599",
            title: "test",
            video: "/videos/SampleVideo_1280x720_20mb.mp4"
        },
        {
            img: "https://source.unsplash.com/I1ASdgphUH4/800x599",
            title: "test",
            video: "/videos/SampleVideo_1280x720_20mb.mp4"
        },
        {
            img: "https://source.unsplash.com/XiDA78wAZVw/600x799",
            title: "test",
            video: "/videos/SampleVideo_1280x720_20mb.mp4"
        },
        {
            img: "https://source.unsplash.com/x8xJpClTvR0/800x599",
            title: "test",
            video: "/videos/SampleVideo_1280x720_20mb.mp4"
        },
        {
            img: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
            title: "test",
            video: "/videos/SampleVideo_1280x720_20mb.mp4"
        },
        {
            img: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
            title: "test",
            video: "/videos/SampleVideo_1280x720_20mb.mp4"
        },
        {
            img: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
            title: "test",
            video: "/videos/SampleVideo_1280x720_20mb.mp4"
        },
        {
            img: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
            title: "test",
            video: "/videos/SampleVideo_1280x720_20mb.mp4"
        },
        {
            img: "https://source.unsplash.com/A-fubu9QJxE/800x533",
            title: "test",
            video: "/videos/SampleVideo_1280x720_20mb.mp4"
        },
        {
            img: "https://source.unsplash.com/5P91SF0zNsI/740x494",
            title: "test",
            video: "/videos/SampleVideo_1280x720_20mb.mp4"
        },
    ];

    const [open, setOpen] = useState(false);

    const [url, setUrl] = useState(null)


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return <div className="container">
        <Box sx={{width: "100%", overflowY: 'scroll'}}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {itemData.map((item) => (
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
    </div>;
}

export default Videos;