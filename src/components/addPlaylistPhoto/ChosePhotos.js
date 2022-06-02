import React, {useState, useEffect} from 'react'
import Box from "@mui/material/Box";
import {photos} from '../../data/photos'
import Column from "../imageDnD/Column"
import {DragDropContext} from "react-beautiful-dnd"
import Typography from "@mui/material/Typography";

const collectIds = (list) => {
    let ids = [];
    list.forEach(item => {
        ids.push(item.id);
    });
    return ids;
};

const ChosePhotos = ({playlist, setPlaylist}) => {


    const [columns, setColumns] = useState({
        'column_1': {
            id: 'column_1',
            title: 'All photos',
            photos_id: collectIds(photos)
        },
        'column_2': {
            id: 'column_2',
            title: 'Selected photos',
            photos_id: []
        }
    });

    const columnOrder = ['column_1', 'column_2']; // order of columns

    const onDragEnd = (result) => {

        const {destination, source, draggableId} = result;
        if (!destination) {
            return;
        }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const start = columns[source.droppableId];
        const finish = columns[destination.droppableId];

        if (start == finish) {
            const newPhotosId = Array.from(start.photos_id);

            newPhotosId.splice(source.index, 1);
            newPhotosId.splice(destination.index, 0, draggableId);


            const newColumn = {
                ...start,
                photos_id: newPhotosId
            }
            //
            const newState = {
                ...columns,
                [newColumn.id]: newColumn,
            }


            setColumns(newState)
            return;
        }

        const startPhotoIds = Array.from(start.photos_id)
        startPhotoIds.splice(source.index, 1);
        const newStart = {
            ...start,
            photos_id: startPhotoIds
        }
        const finishPhotosIds = Array.from(finish.photos_id)
        finishPhotosIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            photos_id: finishPhotosIds
        }

        const newState = {
            ...columns,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish,
        }

        setColumns(newState);

    }

    return(
    <>
        <Box sx={{width: '100%', textAlign: 'start', mt:2}}>
            <Typography variant="subtitle1" sx={{color:"gray"}}>
                Drag photos to add them to your playlist (tap on photo to remove it)
            </Typography>
        </Box>

        <Box sx={{
            width: '100%',
            height: '70vh',
            my: 3,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-around'
        }}>

            <DragDropContext
                onDragEnd={onDragEnd}
            >
                <Box sx={{display: 'flex', width: '100%'}}>
                    {
                        columnOrder.map((column_id, index) => {
                            const column = columns[column_id];
                            const photos_list = column.photos_id.map(id => photos.find(photo => photo.id === id));

                            return (
                                <Column index={index} key={index} column={column} photos={photos_list}/>
                            )
                        })
                    }
                </Box>
            </DragDropContext>
        </Box>
    </>
)
}


export default ChosePhotos;