/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { Button } from '@mui/material';
import DashboardEmployee from './dashboard/DashboardEmployee';
import Divider from '@mui/material/Divider';
import SearchEmployee from './dashboard/SearchEmployee';
import EmployeeTable from './dashboard/EmployeeTable'
import { React } from 'react';
function App() {
  var dataRowVariable = {};
  const dataRow = (row) => {
    dataRowVariable = row;
  }
  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className='header-detail-name'>
            <div className='left-text'>
              <a className='icon'>E</a> &ensp;
              <a className='flex'>Employee Manager</a>
            </div>
            <div className='right-text'>
              <Button>Employee</Button>
              <Button>Team</Button>
            </div>
          </div>
        </header>
        <DashboardEmployee onDatarow={dataRow}></DashboardEmployee>
        <Divider color='black'></Divider>
        <SearchEmployee></SearchEmployee>
        <Divider color='black'></Divider>
        <EmployeeTable></EmployeeTable>
      </div>
    </>
    
  );
}

export default App;
