import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Divider} from "@mui/material";
import Button from "@mui/material/Button";

const DeletePlaylist = ({row, handleClose, list, setPlaylist}) => {

    const handleDelete = () => {
        // remove from playlist
        setPlaylist(prevState => {
            console.log(prevState)
            return prevState.filter(item => item.id !== row.id)
        })
        handleClose();
    }

    return (
        <Box sx={{}}>
            <Typography variant="h6" component="h2" sx={{textAlign: 'center'}}>
                Are you sure you want to delete this playlist?
            </Typography>
            <Divider/>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
                mt: 2
            }}>
                <Button size={'small'} variant="outlined" color="error" onClick={handleDelete}>
                    Delete
                </Button>
                <Button
                    size={'small'}
                    variant="contained"
                    onClick={handleClose}
                    sx={{backgroundColor: "text.disabled", "&:hover": {backgroundColor: "text.disabled"}}}>
                    Cancel
                </Button>
            </Box>
        </Box>
    )
}

export default DeletePlaylist;