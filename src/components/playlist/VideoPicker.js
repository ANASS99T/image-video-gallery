import React, {useState, useEffect} from 'react'
import {videos} from "../../data/videos";
import Box from "@mui/material/Box";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import Typography from "@mui/material/Typography";


export default function VideoPicker({selectedVideos}) {

    useEffect(() => {
        console.log(selectedVideos)
        let list = videos;
        selectedVideos.map(item => {
            list = list.filter(video => video.id != item.id)
        })
        console.log(list)
        setState([list, selectedVideos])
    }, [])



    const move = (source, destination, droppableSource, droppableDestination) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);

        destClone.splice(droppableDestination.index, 0, removed);

        const result = {};
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;

        return result;
    }


    const grid = 6;

    const getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: "none", padding: grid * 2, margin: `0 0 ${grid}px 0`,

        // styles we need to apply on draggables
        ...draggableStyle
    });

    const getListStyle = (isDraggingOver) => ({
        background: isDraggingOver ? "lightblue" : "white",
        padding: grid,
        width: '30%',
        height: isDraggingOver ? '100%' : 'auto',
        boxShadow: 2
    });


    const [state, setState] = useState([videos, []]);


    function onDragEnd(result) {
        const {source, destination} = result;

        // dropped outside the list
        if (!destination) {
            return;
        }
        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;

        if (sInd === dInd) {
            const items = reorder(state[sInd], source.index, destination.index);
            const newState = [...state];
            newState[sInd] = items;
            setState(newState);
        } else {
            const result = move(state[sInd], state[dInd], source, destination);
            const newState = [...state];
            newState[sInd] = result[sInd];
            newState[dInd] = result[dInd];

            setState(newState);
        }
    }


    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    const displayVideo = (e) => {
        console.log(e.detail);
    }

    return (
        <Box>
            <div style={{
                display: "flex", justifyContent: "center", overflow: "auto", maxHeight: "400px"
            }}>
                <DragDropContext onDragEnd={onDragEnd}>
                    {state.map((element, ind) => (<Droppable key={ind} droppableId={`${ind}`}>
                        {(provided, snapshot) => (<Box
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                            {...provided.droppableProps}
                        >
                            <Typography variant="h6" sx={{textAlign: 'center'}}>
                                {ind === 0 ? "All Images" : "Your playlist"}
                            </Typography>
                            {element.map((item, index) => (<Draggable
                                key={item.id}
                                draggableId={item.id + '_1'}
                                index={index}
                            >
                                {(provided, snapshot) => (<div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                >
                                    <img src={`${item.img}`} onClick={displayVideo}
                                         style={{width: "100%"}}
                                         alt={item.img}/>
                                </div>)}
                            </Draggable>))}
                            {provided.placeholder}
                        </Box>)}
                    </Droppable>))}
                </DragDropContext>
            </div>
        </Box>
    )
}