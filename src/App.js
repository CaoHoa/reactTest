/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { Button } from '@mui/material';
import DashboardEmployee from './dashboard/DashboardEmployee';
import Divider from '@mui/material/Divider';
import SearchEmployee from './dashboard/SearchEmployee';
import EmployeeTable from './dashboard/EmployeeTable'
import { React } from 'react';
import { StoreState } from './dashboard/Store';
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import TeamHeader from './team/TeamHeader';
function App() {
  const [buttonMode, setButtonMode] = useState(true)
  var dataRowVariable = {};
  const dataRow = (row) => {
    dataRowVariable = row;
    StoreState.row = row;
  }
  const setMode = (e) =>{
    setButtonMode(e.target.value);
    console.log(buttonMode);
  }
  function A(props){
    const {mode} = props;
    if(mode === 'true'){
      return (<div>
        <DashboardEmployee onDatarow={dataRow}></DashboardEmployee>
        <Divider color='black'></Divider>
        <SearchEmployee></SearchEmployee>
        <Divider color='black'></Divider>
        <EmployeeTable onAdd={dataRowVariable}></EmployeeTable>
      </div>);
    }else{
      return (<div>
        <TeamHeader></TeamHeader>
      </div>);
    }
  }
  A.propTypes = {
    mode: PropTypes.bool.isRequired,
  }
  return (
    <>
      <div className="App">
        <div>
          <header className="App-header">
            <div className='header-detail-name'>
              <div className='left-text'>
                <a className='icon'>E</a> &ensp;
                <a className='flex'>Employee Manager</a>
              </div>
              <div className='right-text'>
                <Button onClick={setMode} value={true}>Employee</Button>
                <Button onClick={setMode} value={false}>Team</Button>
              </div>
            </div>
          </header>
          <A mode={buttonMode}></A>
          {/* {buttonMode ? (<div>
            <DashboardEmployee onDatarow={dataRow}></DashboardEmployee>
            <Divider color='black'></Divider>
            <SearchEmployee></SearchEmployee>
            <Divider color='black'></Divider>
            <EmployeeTable onAdd={dataRowVariable}></EmployeeTable>
          </div>) : (<div></div>)} */}
        </div>
      </div>
    </>
    
  );
}

export default App;
