import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Divider, FormControl, Grid, InputLabel, Select, TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const EditPlaylist = ({row}) => {

    const [type, setType] = React.useState('');
    const types = [
        {value: 'images', label: 'Images'},
        {value: 'videos', label: 'Vidoes'},

    ]

    const handleChange = (event) => {
        setType(event.target.value);
    };

    return (
        <Box>
            <Typography variant="h6">
                Edit Playlist
            </Typography>
            <Divider/>

            <Grid container spacing={2} sx={{my: 1}}>
                <Grid item xs={12} md={6}>
                    <TextField label="Standard" variant="standard" sx={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl variant="standard" sx={{width: "100%"}}>
                        <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={type}
                            onChange={handleChange}
                            label="Type"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                types.map(type => (
                                    <MenuItem key={type.value} value={type.value}>{type.label}</MenuItem>
                                ))
                            }
                            {/*<MenuItem value={10}></MenuItem>*/}
                            {/*<MenuItem value={20}>Twenty</MenuItem>*/}
                            {/*<MenuItem value={30}>Thirty</MenuItem>*/}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

        </Box>
    )
}

export default EditPlaylist;