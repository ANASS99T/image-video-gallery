import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Test = () => {

    const [html, setHtml] = useState('')

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/test')
            .then(res => {
                setHtml(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div style={{height: "90vh"}}>
            <iframe srcDoc={html} style={{width: "100%", height: "100%"}}/>
        </div>
    )

}

export default Test;