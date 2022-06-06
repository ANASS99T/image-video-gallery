import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Card, CardContent, Grid} from "@mui/material";
import Box from "@mui/material/Box";

const TestPlay = () => {

    const [html, setHtml] = useState('')
    const [html2, setHtml2] = useState('')
    const [html3, setHtml3] = useState('')
    const [html4, setHtml4] = useState('')

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/test')
            .then(res => {
                setHtml(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.post('http://127.0.0.1:8000/api/test2')
            .then(res => {
                setHtml2(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.post('http://127.0.0.1:8000/api/test3')
            .then(res => {
                setHtml3(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.post('http://127.0.0.1:8000/api/test4')
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

            <div id="carouselExampleControls" className="carousel slide carousel-fades h-100" data-bs-ride="carousel">
                <div className="carousel-inner h-100">
                    <div className="carousel-item active w-100 h-100">
                        <iframe srcDoc={html}
                                style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div className="carousel-item h-100">
                        <iframe srcDoc={html2}
                                style={{width: "100%", height: "100%"}}/>

                    </div>
                    <div className="carousel-item h-100">
                        <iframe srcDoc={html3}
                                style={{width: "100%", height: "100%"}}/>

                    </div>
                    <div className="carousel-item h-100">
                        <iframe srcDoc={html4}
                                style={{width: "100%", height: "100%"}}/>

                    </div>
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


        </div>
    )

}

export default TestPlay;