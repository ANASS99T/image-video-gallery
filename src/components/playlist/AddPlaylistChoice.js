import React, {useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import {Card, CardActionArea, CardContent, Divider} from "@mui/material";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";

const AddPlaylistChoice = () => {


    return (
        <Box sx={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-evenly', p: 0}}>
            <Typography variant="h5" component="h5" className={'my-1 w-100 text-center p-2'}>
                Type of playlist
            </Typography>
            <Divider/>
            <Card sx={{width: 180, height: 180}} className={"shadow-sm my-3 bg-body mx-2"}>
                <CardActionArea sx={{width: '100%', height: '100%'}} component={Link} to={'/addPlaylist/photo'}>
                    <CardContent sx={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%',
                        flexDirection: 'column'
                    }}>
                        <Typography variant="h5" component="div" className={'my-1'}>
                            <InsertPhotoIcon sx={{fontSize: 40}}/>
                        </Typography>
                        <Typography variant="h5" component="div" className={'my-1'}>
                            Photos
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{width: 180, height: 180}} className={"shadow-sm my-3 bg-body rounded mx-2"}>

                <CardActionArea sx={{width: '100%', height: '100%'}} component={Link} to={'/addPlaylist/video'}>
                    <CardContent sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        flexDirection: 'column'
                    }}>
                        <Typography variant="h5" component="div" className={'my-1'}>
                            <VideoLibraryIcon sx={{fontSize: 40}}/>
                        </Typography>
                        <Typography variant="h5" component="div" className={'my-1'}>
                            Videos
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{width: 180, height: 180}} className={"shadow-sm my-3 bg-body rounded mx-2"}>
                <CardActionArea sx={{width: '100%', height: '100%'}} component={Link} to={'/addPlaylist/custom'}>
                    <CardContent sx={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%',
                        flexDirection: 'column'
                    }}>
                        <Typography variant="h5" component="div" className={'my-1'}>
                            <MoreHorizSharpIcon sx={{fontSize: 40}}/>
                        </Typography>
                        <Typography variant="h5" component="div" className={'my-1'}>
                            Customize
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>

        </Box>
    )


}

export default AddPlaylistChoice;