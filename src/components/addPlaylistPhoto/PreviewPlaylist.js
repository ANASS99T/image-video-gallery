import React, {useState, useEffect} from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import {photos} from '../../data/photos'
import {Card, CardMedia, Grid} from "@mui/material";

const PreviewPlaylist = ({playlist}) => {

    const [images, setImages] = useState([])
    const [matrix, setMatrix] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {
        //get photos from that that match the playlist photos_id
        const list = playlist.photos_id.map(id => {
            return photos.find(photo => photo.id === id)
        })
        setImages(list)
        const rows = playlist.settings.rows
        const cols = playlist.settings.cols
        const matrix = Array(rows).fill(0).map(() => Array(cols).fill(0))
        const data = Array(Math.ceil(list.length / (rows * cols))).fill(matrix)
        setMatrix(matrix)

        // console.log(list.length,rows * cols, (list.length / (rows * cols)))
        setData(data)
        // fil the matrix
        let k = 0
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                matrix[i][j] = list[k] !== undefined ? list[k] : null
                k += 1
            }
        }
        // console.log(matrix)
    }, [])


    return (
        <>
            <Box sx={{width: '100%', textAlign: 'start', mt: 2}}>
                <Typography variant="subtitle1" sx={{color: "gray"}}>
                    Visualization de la playlist: {playlist.name}
                </Typography>
            </Box>
            <Box sx={{
                width: '100%',
                minHeight: '70vh',
                my: 3,
                boxShadow: 4,
                borderRadius: 2,
            }}>
                {
                    playlist.photos_id.length == 0 ?
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Typography variant="h6">
                                Aucune photo dans la playlist
                            </Typography>
                        </Box>
                        :
                        <Grid container spacing={1} sx={{height: '100%', py: 1}}>
                            {
                                matrix.map((row, ind) => (
                                    // <Grid item key={ind}
                                    //       className={"row"}
                                    //       xs={12}
                                    //       sx={{p: 0}}
                                    // >
                                    //     <Box
                                    //         sx={{
                                    //             display: 'flex',
                                    //             flexWrap: 'wrap',
                                    //             justifyContent: 'flex-start',
                                    //             alignItems: 'center'
                                    //         }}
                                    //     >
                                    //         {
                                                row.map((col, index) => (
                                                    <Grid item
                                                          xs={12}
                                                          md={matrix[0].length == 3 ? 6 : matrix[0].length == 2 ? 12 : 12}
                                                          lg={matrix[0].length == 3 ? 4 : matrix[0].length == 2 ? 6 : 12}
                                                          key={index + ind}
                                                    >
                                                        <Card sx={{m: 1, borderRadius: 0}}>
                                                            <CardMedia
                                                                component="img"
                                                                // height="140"
                                                                image={`/${matrix[ind][index].src}`}
                                                                alt="green iguana"
                                                            />

                                                        </Card>
                                                    </Grid>
                                                ))
                                            // }
                                        // </Box>

                                    // </Grid>

                                ))
                            }
                        </Grid>
                }
            </Box>


        </>
    )
}


export default PreviewPlaylist;