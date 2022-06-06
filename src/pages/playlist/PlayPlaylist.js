import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {playlists} from '../../data/playlists'
import {Card, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import {photos} from '../../data/photos'
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const PlayPlaylist = () => {

    const id = useParams()
    const handle = useFullScreenHandle();
    const [list, setList] = useState([]);
    const [playlist, setPlaylist] = useState({})
    const [nRows, setNRows] = useState(0)
    const [nCols, setNCols] = useState(0)
    const [matrix, setMatrix] = useState([])
    const [data, setData] = useState([])
    const [openPreview, setOpenPreview] = useState(false)


    useEffect(() => {
        const l = playlists[0]
        setPlaylist(l)
        setNRows(l.settings.rows)
        setNCols(l.settings.cols)

        const images = l.photos_id.map(id => {
            return photos.find(photo => photo.id === id)
        })

        const pages = Math.ceil(images.length / (l.settings.rows * l.settings.cols))
        const matrix = Array(l.settings.rows).fill(0).map(() => Array(l.settings.cols).fill(0))
        const data = Array(Math.ceil(images.length / (l.settings.rows * l.settings.cols))).fill(matrix)
        setMatrix(matrix)
        setData(data)
        let li = []
        let k = 0
        for (let n = 0; n < pages; n++) {
            let matrix = Array(nRows).fill(0).map(() => Array(nCols).fill(0))
            for (let i = 0; i < nRows; i++) {
                for (let j = 0; j < nCols; j++) {
                    matrix[i][j] = images[k] !== undefined ? images[k] : null
                    k += 1
                }
            }
            li.push(matrix)
            matrix = Array(nRows).fill(0).map(() => Array(nCols).fill(0))
        }
        setList(li)

        const handleOpenPreview = () => {
            setOpenPreview(true)
        }

        const handleClosePreview = (event, reason) => {
            if (reason === 'clickaway') {
                return;
            }
            setOpenPreview(false);
        }

        // handle.enter()

    }, [])

    return (
        // <FullScreen handle={handle}>
            <>
            <Box sx={{position: "absolute", top: 0, width: "100%", height: '100%'}}>
                <IconButton size="small" onClick={() => setOpenPreview(false)}
                            sx={{position: "absolute", top: "10px", right: "10px", zIndex: 4}}>
                    <CloseIcon/>
                </IconButton>

                <div id="carouselExampleControls" className="carousel slide carousel-fade w-100 h-100"
                     data-bs-ride="carousel">
                    <div className="carousel-inner w-100 h-100">
                        {
                            list.map((page, index) => {
                                return (
                                    <div className={`carousel-item w-100 h-100 ${index === 0 ? 'active' : ""}`}
                                         key={index}>
                                        <Grid container spacing={1} sx={{height: '100%', py: 1}}>
                                            {
                                                page.map((row, ind) => (

                                                    row.map((col, inde) => (
                                                        <Grid item
                                                              xs={12}
                                                              md={page[0].length == 3 ? 6 : page[0].length == 2 ? 12 : 12}
                                                              lg={page[0].length == 3 ? 4 : page[0].length == 2 ? 6 : 12}
                                                              key={inde + ind}
                                                        >

                                                            <Card sx={{
                                                                m: 1,
                                                                borderRadius: 0,
                                                                height: "100%",
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center'
                                                            }}>
                                                                {page[ind][inde] ?
                                                                    <CardMedia
                                                                        component="img"
                                                                        height="100%"
                                                                        image={`/${page[ind][inde].src}`}
                                                                        alt="green iguana"
                                                                    />
                                                                    :
                                                                    <CardContent>
                                                                        <Typography gutterBottom variant="h6"
                                                                                    component="div"
                                                                                    sx={{color: "lightgray"}}>
                                                                            Aucune photo
                                                                        </Typography>
                                                                    </CardContent>
                                                                }

                                                            </Card>
                                                        </Grid>
                                                    ))
                                                ))}
                                        </Grid>
                                    </div>
                                )
                            })
                        }
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </Box>
            </>
        // </FullScreen>
    )
}

export default PlayPlaylist;