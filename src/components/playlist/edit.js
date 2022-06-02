import React, {useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
    Checkbox,
    Divider,
    FormControl, FormControlLabel,
    Grid,
    InputLabel,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    NativeSelect,
    Paper,
    Switch,
    TextField
} from "@mui/material";
import {useParams} from "react-router-dom";
import Container from "@mui/material/Container";
import {videos} from '../../data/videos'
import Slider from '@mui/material/Slider';
import * as PropTypes from "prop-types";
import PhotoPicker from "./PhotoPicker";
import VideoPicker from "./VideoPicker";

function Item(props) {
    return null;
}

Item.propTypes = {children: PropTypes.node};

VideoPicker.propTypes = {};
const EditPlaylist = ({playlist, setPlaylist}) => {

    let {id} = useParams();

    const [row, setRow] = useState({})
    const [data, setData] = useState([])

    const types = [{value: 1, label: 'Photos'}, {value: 2, label: 'Vidoes'}]

    const handleChangeType = (event) => {
        console.log(row.type)
        setRow({...row, type: event.target.value})
    };

    useEffect(() => {
        const item = playlist.find(item => item.id == id);
        setRow(item);
    }, [])


    const [stateVideos, setStateVideos] = useState([videos, []]);


    const marksDelay = [
        {
            value: 0,
            label: '0.5s',
        },
        {
            value: 10,
            label: '1s',
        },
        {
            value: 20,
            label: '2s',
        },
        {
            value: 30,
            label: '3s',
        },
        {
            value: 40,
            label: '10s',
        },
        {
            value: 50,
            label: '15s',
        },
        {
            value: 60,
            label: '20s',
        },
        {
            value: 73,
            label: '1min',
        },
        {
            value: 88,
            label: '2min',
        },
        {
            value: 100,
            label: '3min',
        },
    ];

    function valueLabelFormat(value) {
        return marksDelay.findIndex((mark) => mark.value === value) + 1;
    }

    function valuetext(value) {
        return marksDelay.findIndex((mark) => mark.value === value);
    }

    return (<Container>
            <Box>
                <Typography variant="h6">
                    Edit Playlist
                </Typography>
                <Divider/>

                <Grid container spacing={2} sx={{my: 1}}>
                    <Grid item xs={12} md={6}>
                        <TextField label="Name" variant="standard" sx={{width: "100%"}} value={row.name || ''}
                                   onChange={(e) => setRow({...row, name: e.target.value})}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="type">
                                Type
                            </InputLabel>
                            <NativeSelect
                                value={row?.type || ''}
                                inputProps={{
                                    name: 'type', id: 'type',
                                }}
                                onChange={handleChangeType}
                            >
                                {/*<option value={''}></option>*/}
                                <option value={1}>Photos</option>
                                <option value={2}>Videos</option>

                            </NativeSelect>
                        </FormControl>

                    </Grid>
                    {row.type == 1 ? <Grid item xs={12}>
                        <Typography variant="h6">
                            Photos
                        </Typography>
                        <PhotoPicker selectedPhotos={row.photos}/>

                        {/*<Box>*/}
                        {/*    /!*<CheckPhotos photos={photos} checkedPhotos={row.photos || []} setRow={setRow}/>*!/*/}
                        {/*</Box>*/}
                    </Grid> : row.type == 2 ? <Grid item xs={12}>

                        <Typography variant="h6">
                            Videos
                        </Typography>

                        <VideoPicker selectedVideos={row.videos}/>

                    </Grid> : null}
                </Grid>

                <Box>
                    <Typography variant="h6" sx={{my: 3}}>
                        Display Settings
                    </Typography>
                </Box>
                <Grid container spacing={4} sx={{mb: 4}}>
                    <Grid item xs={12} sm={3} md={4}
                          sx={{display: 'flex', alignItems: 'center', width: "100%", justifyContent: 'center'}}>
                        <FormControl component="fieldset">
                            <FormControlLabel
                                value="Auto_play"
                                control={<Switch color="primary"/>}
                                label="Auto Play"
                                labelPlacement="start"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3} md={4}
                          sx={{display: 'flex', alignItems: 'center', width: "100%", justifyContent: 'center'}}>
                        <FormControl component="fieldset">
                            <FormControlLabel
                                value="loop"
                                control={<Switch color="primary"/>}
                                label="Auto Repeat"
                                labelPlacement="start"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3} md={4}
                          sx={{display: 'flex', alignItems: 'center', width: "100%", justifyContent: 'center'}}>
                        <FormControl component="fieldset">
                            <FormControlLabel
                                value="full_screen"
                                control={<Switch color="primary"/>}
                                label="Full Screen"
                                labelPlacement="start"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3} md={4}
                          sx={{
                              display: 'flex',
                              alignItems: 'center',
                              width: "100%",
                              justifyContent: 'center',
                              textAlign: 'center'
                          }}>
                        <Typography variant="subtitle1" sx={{my: 1, mr: 3}}>
                            Delay
                        </Typography>
                        {/*<Slider defaultValue={60} min={0.5} max={120} step={1} aria-label="Default"*/}
                        {/*        valueLabelDisplay="auto"/>*/}
                        <Slider
                            aria-label="Restricted values"
                            defaultValue={2000}
                            valueLabelFormat={valueLabelFormat}
                            getAriaValueText={valuetext}
                            step={null}
                            valueLabelDisplay="auto"
                            marks={marksDelay}
                        />
                    </Grid>

                </Grid>
            </Box>
        </Container>

    )
}

export default EditPlaylist;