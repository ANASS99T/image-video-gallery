import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import {Card, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {FullScreen, useFullScreenHandle} from "react-full-screen";


const Play = ({nRows, nCols, images, setOpenPreview}) => {

    const handle = useFullScreenHandle();

    const [list, setList] = useState([]);
    const pages = Math.ceil(images.length / (nRows * nCols))
    const listImage = images

    useEffect(() => {
        let l = []
        let k = 0
        for (let n = 0; n < pages; n++) {
            let matrix = Array(nRows).fill(0).map(() => Array(nCols).fill(0))
            for (let i = 0; i < nRows; i++) {
                for (let j = 0; j < nCols; j++) {
                    matrix[i][j] = listImage[k] !== undefined ? listImage[k] : null
                    k += 1
                }
            }
            l.push(matrix)
            matrix = Array(nRows).fill(0).map(() => Array(nCols).fill(0))
        }
        setList(l)

        // console.log(list)
        handle.enter()
    }, [])


    return (
        <FullScreen handle={handle}>
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
        </FullScreen>
    )

}


export default Play;