import React, { useState } from "react";
import { Button, MenuItem, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddNewEmployee({open, onClose, onSubmit} ){
    const [dateDefault,setDate] = useState('2021-11-11')
    const [formData, setFormData] = useState({
        name:'',
        address:'',
        sexEmployee:'',
        age:'',
        date:'',
        money:'',
        phoneNumber:''
    }) 

    const handleNameChange = (e) => {
        setFormData(prev => ({...prev, name:e.target.value}));
    }

    const handleAddressChange = (e) => {
        setFormData(prev => ({...prev, address:e.target.value}));
    }
    const handleSexChange = (e) => {
        setFormData(prev => ({...prev, sexEmployee:e.target.value}));
    }
    const handleAgeChange = (e) => {
        setFormData(prev => ({...prev, age:e.target.value}));
    }
    const handleDateChange = (e) => {
        setDate(e.target.value)
        setFormData(prev => ({...prev, date:e.target.value}));
    }
    const handleMoneyChange = (e) => {
        setFormData(prev => ({...prev, money:e.target.value}));
    }
    const handlePhoneNumberChange = (e) => {
        setFormData(prev => ({...prev, phoneNumber:e.target.value}));
    }

    const handleSubmitClick =()=>{
        onSubmit(formData)
        onClose()
    }

    const sexOption =[{
        value: 'male',
        label: 'male'
    },{
        value: 'female',
        label: 'female'
    }]

    return (
        <>
            <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle style={{'background-color':'rgb(18,65,145)'}} id="alert-dialog-title">
            <a style={{color:'white'}}>Add New Employee</a>
            </DialogTitle>
            <DialogContent>
            <TextField required autoFocus margin="dense" type="" id="name" label="Full name employee" fullWidth variant="standard" value={formData.name} onChange={handleNameChange}></TextField>
            {/* /// */}
            <TextField style={{width:'70%'}} required autoFocus margin="dense" type="" id="address" label="Address" value={formData.address} onChange={handleAddressChange} variant="standard"></TextField>
            <TextField style={{width:'25%', marginLeft:'10px'}} required autoFocus margin="dense" type="" id="sex" label="Sex Employee"  variant="standard" defaultValue={'male'} onChange={handleSexChange} select>
                {sexOption.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                ))}
            </TextField>
            {/* /// */}
            <TextField style={{width:'70%'}} required autoFocus margin="dense" type="number" value={formData.age} onChange={handleAgeChange} id="age" label="Age"  variant="standard"></TextField>
            <TextField style={{width:'25%', marginLeft:'10px'}} required autoFocus margin="dense" type="date" id="date" label="Date"  variant="standard" value={dateDefault} onChange={handleDateChange}>
            </TextField>
            {/* /// */}
            <TextField style={{width:'70%'}} required autoFocus value={formData.money} onChange={handleMoneyChange} margin="dense" type="number" id="money" label="Money/hour"  variant="standard"></TextField>
            <TextField style={{width:'25%', marginLeft:'10px'}} value={formData.phoneNumber} type="number" onChange={handlePhoneNumberChange} required autoFocus margin="dense" id="Phone" label="Phone Number"  variant="standard">
            </TextField>
            {/* /// */}
            </DialogContent>
            <DialogActions>
            <Button onClick={onClose}>No</Button>
            <Button onClick={handleSubmitClick} autoFocus>
                Yes
            </Button>
            </DialogActions>
        </Dialog>
        </>
        
    );
}