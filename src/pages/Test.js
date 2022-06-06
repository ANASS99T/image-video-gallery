import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Card, CardContent, Grid} from "@mui/material";
import Box from "@mui/material/Box";

const Test = () => {

    const [html, setHtml] = useState('')
    const [size, setSize] = useState({width: 0, height: 0});
    const [html2, setHtml2] = useState('')
    const [html3, setHtml3] = useState('')
    const [html4, setHtml4] = useState('')

    useEffect(() => {
        axios.post('http://127.0.0.1:8181/api/test', {size: size})
            .then(res => {
                setHtml(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.post('http://127.0.0.1:8181/api/test2', {size: size})
            .then(res => {
                setHtml2(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.post('http://127.0.0.1:8181/api/test3', {size: size})
            .then(res => {
                setHtml3(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.post('http://127.0.0.1:8181/api/test4', {size: size})
            .then(res => {
                setHtml4(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "white",
            zIndex: 99999
        }}>

            <Grid container spacing={2} sx={{width: "100%", height: "100%"}}>

                <Grid item xs={12} md={6} sx={{width: "100%"}}>
                    <Card sx={{height: "100%"}}>
                        <CardContent sx={{
                            display: "table",
                            overflow: "auto",
                            emptyCells: "show",
                            borderCollapse: "collapse",
                            width: "100%",
                            height: "100%"
                        }}>
                            <iframe srcDoc={html} style={{
                                width: "100%",
                                height: "100%",
                                border: "none",
                                m: 0,
                                p: 0,
                                display: "block"
                            }}/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{height: "100%"}}>
                        <CardContent className="d-flex h-100">
                            <iframe srcDoc={html2} style={{flexGrow: 1, border: "none", margin: 0, padding: 0}}/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{height: "100%"}}>
                        <CardContent className="d-flex h-100">
                            <iframe srcDoc={html3} style={{flexGrow: 1, border: "none", margin: 0, padding: 0}}/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{height: "100%"}}>
                        <CardContent className="d-flex h-100">
                            <iframe srcDoc={html4} style={{flexGrow: 1, border: "none", margin: 0, padding: 0}}/>
                        </CardContent>
                    </Card>
                </Grid>
                {/*    <Grid item xs={12} md={6}>*/}
                {/*        <iframe srcDoc={html2} style={{width: "100%", height: "100%"}}/>*/}
                {/*    </Grid>*/}
                {/*    <Grid item xs={12} md={6}>*/}
                {/*        <iframe srcDoc={html} style={{width: "100%", height: "100%"}}/>*/}
                {/*    </Grid>*/}
                {/*    <Grid item xs={12} md={6}>*/}
                {/*        <iframe srcDoc={html2} style={{width: "100%", height: "100%"}}/>*/}
                {/*    </Grid>*/}

            </Grid>
        </div>
    )

}

export default Test;