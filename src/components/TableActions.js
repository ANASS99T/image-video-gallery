import React, {useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from "@mui/material/Modal";
import EditPlaylist from "./playlist/edit";
import DeletePlaylist from "./playlist/delete";
import playlist from "../pages/Playlist";

const TableActions = ({row, list, setPlaylist}) => {

    useEffect(() => {
        console.log(row);
    }, []);


    const Modalstyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "50%",
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        boxShadow: 24,
        borderRadius: '5px',
        p: 2,
    };

    const [openDelete, setOpenDelete] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = (event, reason) => {
        if (reason && reason == "backdropClick")
            return;
        setOpenEdit(false)
    };

    const handleOpenDelete = () => {

        setOpenDelete(true)
    };
    const handleCloseDelete = (event, reason) => {
        if (reason && reason == "backdropClick")
            return;
        setOpenDelete(false)
    };

    return (
        <>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: "100%"}}>
                <IconButton aria-label="edit" color="secondary" size="medium" onClick={handleOpenEdit}>
                    <EditIcon fontSize="inherit"/>
                </IconButton>
                <IconButton aria-label="delete" color="error" size="medium" onClick={handleOpenDelete}>
                    <DeleteIcon fontSize="inherit"/>
                </IconButton>
            </Box>

            <Modal
                open={openEdit}
                onClose={handleCloseEdit}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={Modalstyle}>
                    <EditPlaylist row={row}/>
                </Box>
            </Modal>
            <Modal
                open={openDelete}
                onClose={handleCloseDelete}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{...Modalstyle, width: {xs: "100%", sm: "50%", md: '25%'}}}>
                    <DeletePlaylist row={row} handleClose={handleCloseDelete} list={list} setPlaylist={setPlaylist}/>
                </Box>
            </Modal>
        </>
    )
}


export default TableActions;