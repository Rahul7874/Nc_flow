import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import style from "./Observations.module.css"
import axios from "axios"
import Snackbar from '@mui/material/Snackbar';
import { useState } from "react";
import { useEffect } from 'react';
import { PostObsdata } from '../../services/obsServices';
import { useDispatch } from 'react-redux';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};
// --------------------------------------------------------------------------------------------------------



export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);
    const [openN, setOpenN] = useState(false);

    const dispatch = useDispatch()
    // const wrongreload = () => {
    //     window.location.reload(false)

    // }

    //   -----------------------------------------------------------------------------------------------
    const handleClick = () => {
        setOpenN(true);
    };

    const handleNotification = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenN(false);
    };
    const action = (

        <IconButton
            size="small"
            aria-label="close"
            color="success"
            onClick={handleNotification}
        >
            <CloseIcon fontSize="small" />
        </IconButton>

    )
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [Obser, setObser] = useState({
        Product: "", ProcessStage: "",
        Problem: "", Issue: "", Rootcause: "", PartNo: "",
        ReworkHrs: ""
    })

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value
        setObser({ ...Obser, [name]: value })

    }
    const submitHandler = (event) => {

        // event.preventDefault();

        // axios.post("http://localhost:8080/obse/post", Obser)

        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        dispatch(PostObsdata(Obser))

        handleClose()
        // wrongreload()
        handleClick()
        window.location.href = "/observations"

    }

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen} sx={{ mt: 2 }}>
                Create New Observations
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                maxWidth
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} >
                    <div style={{ textAlign: "center" }}>Observations</div>
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <form>
                        <div className="obs_form_main">
                            <div className="part1">
                                <select name="Product" className="sel" onChange={handleInputs}>
                                <option>Product</option>
                                    <option value="Engine">Engine</option>
                                    <option value="Axle">Axle</option>
                                    <option value="Suspension">Suspension</option>
                                    <option value="Transmission">Transmission</option>
                                </select>

                                <select name="ProcessStage" className="sel" onChange={handleInputs}>
                                    <option>Process Stage</option>
                                    <option value="Drilling">Drilling</option>
                                    <option value="Machining">Machining</option>
                                    <option value="Chamfer">Chamfer</option>
                                    <option value="Welding">Welding</option>
                                </select>

                                <select name="Problem" className="sel" onChange={handleInputs}>
                                    
                                    <option>Problem happend in</option>
                                    <option value="Customer End">Customer End</option>
                                    <option value="Tool Room">Tool Room</option>
                                    <option value="Machining Center">Machining Center</option>
                                    <option value="Design">Design</option>
                                </select>

                                <select name="PartNo" className="sel" onChange={handleInputs}>
                                    
                                    <option>Part No</option>
                                    <option value="DAPR-AB-1234">DAPR-AB-1234</option>
                                    <option value="DAUS-IN-7244">DAUS-IN-7244</option>
                                    <option value="DAIN-MA-2548">DAIN-MA-2548</option>
                                </select>

                            </div>
                            {/* -------------2 part of the form--------------- */}
                            <div className="part1" >
                                <textarea name="Issue" className="inp" placeholder="Item description" onChange={handleInputs} />

                                <select name="Rootcause" className="sel" onChange={handleInputs}>
                                <option>Rootcause</option>
                                    <option value="Design Error">Design Error</option>
                                    <option value="Faulty Material">Faulty Material</option>
                                    <option value="Faulty Manufacturing">Faulty Manufacturing</option>
                                    <option value="Improper Use">Improper Use</option>
                                </select>
                                <input name="ReworkHrs" type="number" className="inpU" placeholder="Reworks Hrs" onChange={handleInputs} />

                            </div>
                        </div>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="contained" onClick={submitHandler} >Create</Button>
                </DialogActions>
            </BootstrapDialog>
            <Snackbar
                open={openN}
                autoHideDuration={5000}
                onClose={handleNotification}
                message="Observation was Created Succesfully"
                action={action}
                sx={{
                    width: 300,
                    color: 'success.main',
                }}
            />

        </div>
    );
}