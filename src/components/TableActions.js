import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from "@mui/material/Modal";
import EditPlaylist from "./playlist/edit";
import DeletePlaylist from "./playlist/delete";

const TableActions = (row) => {

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

    const [openDelete, setOpenDelete] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);

    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);

    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

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
                <Box sx={{...Modalstyle, width:"25%"}}>
                    <DeletePlaylist row={row} handleClose={handleCloseDelete}/>
                </Box>
            </Modal>
        </>
    )
}


export default TableActions;