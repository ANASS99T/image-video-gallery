import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Divider} from "@mui/material";

const EditPlaylist = ({row}) => {

    return (
        <Box>
            <Typography variant="h6">
                Edit Playlist
            </Typography>
            <Divider/>

        </Box>
    )
}

export default EditPlaylist;