import React, {useState, useEffect} from 'react'
import Container from "@mui/material/Container";
import DataTable from 'react-data-table-component';
import Box from "@mui/material/Box";
import TableActions from "../components/TableActions";

const Playlist = ({playlist, setPlaylist}) => {

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            width: '50%',
        },
        {
            name: 'Type',
            selector: row => row.type === 1 ? 'Photos' : 'Videos',
            width: '30%',
        },
        {
            name: 'actions',
            width: '20%',
            cell: row => (<TableActions row={row} list={playlist} setPlaylist={setPlaylist}/>)
        },
    ];

    const [data, setData] = useState([])

    useEffect(() => {
        setData(playlist)
    }, [])

    return (
        <Container>
            <Box sx={{my: 3, boxShadow: 3, borderRadius: 3}}>
                <DataTable
                    title="Playlist"
                    columns={columns}
                    data={data}
                    pagination
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5, 10, 20]}
                />
            </Box>
        </Container>
    )
}

export default Playlist;