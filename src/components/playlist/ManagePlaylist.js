import React, {useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import {Card, CardActionArea, CardContent, Divider} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";

const ManagePlaylist = ({id}) => {


    return (
        <Box sx={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-evenly', p: 0}}>
            <Typography variant="h5" component="h5" className={'my-1 w-100 text-center p-2'}>
                Manage your Playlist
            </Typography>
            <Divider/>
            <Card sx={{width: 180, height: 180}} className={"shadow-sm my-3 bg-body mx-2"}>
                <CardActionArea sx={{width: '100%', height: '100%'}} component={Link} to={`/playlist/play/${id}`}>
                    <CardContent sx={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%',
                        flexDirection: 'column'
                    }}>
                        <Typography variant="h5" component="div" className={'my-1'}>
                            <PlayArrowIcon sx={{fontSize: 50}}/>
                        </Typography>
                        <Typography variant="h5" component="div" className={'my-1'}>
                            Play
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{width: 180, height: 180}} className={"shadow-sm my-3 bg-body rounded mx-2"}>

                <CardActionArea sx={{width: '100%', height: '100%'}} component={Link} to={`/playlist/edit/${id}`}>
                    <CardContent sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        flexDirection: 'column'
                    }}>
                        <Typography variant="h5" component="div" className={'my-1'}>
                            <ModeEditOutlineIcon sx={{fontSize: 40}}/>
                        </Typography>
                        <Typography variant="h5" component="div" className={'my-1'}>
                            Edit
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{width: 180, height: 180}} className={"shadow-sm my-3 bg-body rounded mx-2"}>
                <CardActionArea sx={{width: '100%', height: '100%'}} component={Link} to={`/playlist/setting/${id}`}>
                    <CardContent sx={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%',
                        flexDirection: 'column'
                    }}>
                        <Typography variant="h5" component="div" className={'my-1'}>
                            <SettingsIcon sx={{fontSize: 40}}/>
                        </Typography>
                        <Typography variant="h5" component="div" className={'my-1'}>
                            Config
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>

        </Box>
    )


}

export default ManagePlaylist;