import React, {useState} from 'react';
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChosePhotos from "../../components/addPlaylistPhoto/ChosePhotos";
import ConfigPlaylist from '../../components/addPlaylistPhoto/ConfigPlaylist';
import PreviewPlaylist from "../../components/addPlaylistPhoto/PreviewPlaylist";
import Snackbar from '@mui/material/Snackbar';
import {Alert} from "@mui/material";
import {photos} from "../../data/photos";
import { useNavigate } from 'react-router-dom';

const steps = ['Choix des images', 'Configuration', 'Aperçu'];


const PhotoPlaylist = ({playlists, setPlaylists}) => {

    const navigate = useNavigate();


    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const [playlist, setPlaylist] = useState({photos_id: [], name: '', settings: {rows: 1, cols: 1}});
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [message, setMessage] = useState('')


    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        if (activeStep === 0 && !playlist.photos_id.length) {
            setMessage('Veuillez insérer au moins une photo dans la playlist')
            setOpenSnackbar(true)
            return;
        }
        if (activeStep === 1 && (playlist.name === "" || playlist.rows === "" || playlist.cols === "")) {
            setMessage('Vous ne pouvez pas passer à l\'étape suivante sans remplir les champs obligatoires')
            setOpenSnackbar(true)
            return;
        }
        // if(activeStep === 2)
        // {
        //     return
        // }
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    const savePlaylist = () => {
        console.log(playlists)
        const image = photos.find(photo => photo.id === playlist.photos_id[0])
        const newPlaylist = {
            id: new Date().getTime(),
            photos_id: playlist.photos_id,
            videos_id: [],
            html_id: [],
            name: playlist.name,
            image: "/" + image.src,
            settings: {
                rows: playlist.rows,
                cols: playlist.cols,
            }
        }
        setPlaylists([...playlists, newPlaylist])
        navigate('/newplaylist')
    }


    return (
        <Container>
            <Box sx={{width: '100%', my: 6}}>
                <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label} completed={completed[index]}>
                            <StepButton color="inherit" onClick={handleStep(index)}>
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {allStepsCompleted() ? (
                        <React.Fragment>
                            <Typography sx={{mt: 2, mb: 1}}>
                                Tous les étapes sont complétées
                            </Typography>
                            <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                                <Box sx={{flex: '1 1 auto'}}/>
                                <Button onClick={handleReset}>réinitialiser</Button>
                                <Button onClick={savePlaylist}>enregistrer</Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {
                                activeStep == 0 ? <ChosePhotos playlist={playlist} completed={completed}
                                                               setPlaylist={setPlaylist}/> : activeStep == 1 ?
                                    <ConfigPlaylist playlist={playlist}
                                                    setPlaylist={setPlaylist}/> : activeStep == 2 ?
                                        <PreviewPlaylist playlist={playlist}/> : null
                            }
                            <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{mr: 1}}
                                >
                                    Retour
                                </Button>
                                <Box sx={{flex: '1 1 auto'}}/>
                                <Button onClick={handleNext} sx={{mr: 1}}>
                                    Suivant
                                </Button>
                                {activeStep !== steps.length &&
                                    (completed[activeStep] ? (
                                        <Typography variant="caption" sx={{display: 'inline-block'}}>
                                            Etap {activeStep + 1} dejà complétée
                                        </Typography>
                                    ) : (
                                        <Button onClick={handleComplete}>
                                            {completedSteps() === totalSteps() - 1
                                                ? 'Terminer'
                                                : 'Terminer l\'étape'}
                                        </Button>
                                    ))}
                            </Box>
                        </React.Fragment>
                    )}
                </div>
            </Box>

            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="warning" sx={{width: '100%'}}>
                    {message}
                </Alert>
            </Snackbar>

        </Container>
    )
}

export default PhotoPlaylist;