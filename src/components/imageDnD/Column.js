import React, {useState} from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Card, CardMedia} from "@mui/material";
import {Droppable, Draggable} from 'react-beautiful-dnd'
import Modal from "@mui/material/Modal";

const Column = ({column, photos, completedSteps}) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {md:'50%', xs:'100%'},
        bgcolor: 'background.paper',
        boxShadow: 24,
    };

    const [open, setOpen] = useState(false);
    const [preview, setPreview] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const previewPhoto = (src) => {
        setPreview('/' + src)
        handleOpen()
    }

    return (
        <Box sx={
            {
                width: {sm: '80%', md: '40%'},
                border: '.5px solid lightgray',
                mx: 1,
                borderRadius: '2px',
                display: "flex",
                flexDirection: "column",

            }}>
            <Box sx={{textAlign: 'center', margin: '10px 0'}}>
                <Typography variant="h6">{column.title}</Typography>
            </Box>
            <Box sx={{
                p: 1, textAlign: 'center', maxHeight: '60vh', overflow: 'auto', flexGrow: 1
            }}>
                <Droppable key={column.id} droppableId={column.id}>
                    {
                        (provided, snapshot) => (
                            <Box ref={provided.innerRef} {...provided.droppableProps}
                                 isDraggingOver={snapshot.isDraggingOver}
                                 sx={{
                                     backgroundColor: snapshot.isDraggingOver ? 'lightblue' : 'white',
                                     height: '100%'
                                 }}>
                                {
                                    photos.map((photo, index) => (
                                        <Draggable key={photo.id} draggableId={photo.id} index={index} isDragDisabled={completedSteps[0]}>
                                            {
                                                (provided, snapshot) => (
                                                    <Box
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        ref={provided.innerRef}
                                                        isDragging={snapshot.isDragging}
                                                        key={index}
                                                        sx={{
                                                            boxShadow: snapshot.isDragging ? 4 : 0,
                                                            my: 1
                                                        }}
                                                    >
                                                        <Card>
                                                            <CardMedia
                                                                component="img"
                                                                height="140"
                                                                sx={{m: 1}}
                                                                image={`/${photo.src}`}
                                                                alt="green iguana"
                                                                onClick={() => previewPhoto(photo.src)}
                                                            />
                                                        </Card
                                                        >
                                                    </Box>

                                                )
                                            }
                                        </Draggable>
                                    ))
                                }
                                {provided.placeholder}
                            </Box>
                        )
                    }

                </Droppable>
            </Box>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img src={preview} alt='preview image' width={'100%'} height={'100%'}/>
                </Box>
            </Modal>
        </Box>)
}

export default Column;
