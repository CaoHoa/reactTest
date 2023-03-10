import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

export default function SearchEmployee(){
    
    const styleSearchBar = {
        height: '100px'
    };
    const styleInput = {
        display: 'flex', justifyContent: 'center' 
    }

    return (
        <>
            <div className="header-detail-name" style={styleSearchBar}>
                <div style={{ float:'left' }}>
                    <spa>results</spa>
                </div>
                <div style={styleInput}>
                    <TextField style={{ width:'500px', display:'flex'}} id="outlined-basic" label="Outlined" variant="outlined" InputProps={{ startAdornment: (
                    <SearchIcon />
                    ),}}/>
                </div>
                <br/>
                <div>Search results</div>
            </div>
        </>
        
    );
}