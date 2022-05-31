import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Divider} from "@mui/material";
import Button from "@mui/material/Button";

const DeletePlaylist = ({row, handleClose}) => {


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
                <Button variant="outlined" color="error" onClick={() => {

                }}>
                    Delete
                </Button>
                <Button
                    variant="contained"
                    onClick={handleClose}
                    sx={{backgroundColor:"text.disabled", "&:hover":{backgroundColor:"text.disabled"}}}>
                    Cancel
                </Button>
            </Box>
        </Box>
    )
}

export default DeletePlaylist;