import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Grid, TextField} from "@mui/material";


const ConfigPlaylist = ({playlist, setPlaylist}) => {

    const handleColChange = (e) => {
        let value = e.target.value;
        if (value >= 3)
            value = 3;
        if (value < 0)
            value = 1;

        setPlaylist({
            ...playlist,
            settings: {
                ...playlist.settings,
                cols: value !== "" ? parseInt(value) : value
            }
        })
    };
    const handleRowChange = (e) => {
        let value = e.target.value;
        if (value >= 3)
            value = 3;
        if (value < 0)
            value = 1;

        setPlaylist({
            ...playlist,
            settings: {
                ...playlist.settings,
                rows: value !== "" ? parseInt(value) : value
            }
        })
    };

    return (
        <>
            <Box sx={{width: '100%', textAlign: 'start', mt: 2}}>
                <Typography variant="subtitle1" sx={{color: "gray"}}>
                    Configuration de la playlist
                </Typography>
            </Box>
            <Box sx={{
                width: '100%',
                height: '70vh',
                my: 3,
            }}>
                <Typography variant="button" sx={{color: "black"}}>
                    Information de la playlist
                </Typography>
                <Grid container spacing={2} sx={{mt: 1, mb: 2}}>
                    <Grid item xs={12} md={6}>
                        <TextField id="playlist_name" label="Titre du playlist" type="text" variant="outlined" required
                                   value={playlist.name}
                                   onChange={(e) => setPlaylist({...playlist, name: e.target.value})}
                                   sx={{width: '100%'}}
                        />
                    </Grid>
                </Grid>
                <Typography variant="button" sx={{color: "black"}}>
                    Paramètres d'affichage par page
                </Typography>
                <Grid container spacing={2} sx={{my: 1}}>
                    <Grid item xs={12} sm={6}>
                        <TextField id="num_rows" label="Nombre des lignes" type='number'
                                   InputProps={{inputProps: {min: 1, max: 3}}} variant="outlined"
                                   required
                                   value={playlist.settings.rows}
                                   onChange={handleRowChange}
                                   sx={{width: '100%'}}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="num_cols" label="Nombre des colonnes" type='number'
                                   InputProps={{inputProps: {min: 1, max: 3}}} variant="outlined"
                                   required
                                   value={playlist.settings.cols}
                                   onChange={handleColChange}
                                   sx={{width: '100%'}}
                        />
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}


export default ConfigPlaylist;