/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddNewEmployee from "./AddNewEmployee";

export default function DashboardEmployee({onDatarow}){
    const [isopenDialog, setDialog] = React.useState(false);

    const handleSubmit = (formData) => {
        // console.log("data:" + formData)
        onDatarow(formData);
    }

    const openDialog = () => {
        setDialog(true);
    }

    const handleSetClickOpenDialogAdd = () => {
        setDialog(false)
    };

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
    setOpen(false);
    };
      
    return (
        <>
        <div className="header-detail-name">
            <div className="left-text">
                <a>Employee</a>
            </div>
            <div className="right-text">
                <Button onClick={openDialog}><ControlPointIcon>add</ControlPointIcon></Button>
                <AddNewEmployee onSubmit={handleSubmit} open={isopenDialog} onClose={handleSetClickOpenDialogAdd}></AddNewEmployee>
                <Button onClick={handleClickOpen}><DeleteIcon>delete</DeleteIcon></Button>
            </div>
        </div>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">
            {"Are you sure to delete all employee selected?"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Will be delete all data emplayee selected.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={handleClose} autoFocus>
                Yes
            </Button>
            </DialogActions>
        </Dialog>
        </>
    )
}