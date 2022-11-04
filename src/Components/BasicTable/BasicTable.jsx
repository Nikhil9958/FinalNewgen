import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './BasicTable.css'
import TableCard from '../TableCard/TableCard';

const tableData = {
  Precesion:'0.34324',
  Timestamp:'Oct 20,2020 ; 02:23 pm',
  Scheduling:'Flase',
  AreaUnderROC:'AreaUnderROC',
  View_Type:'A',
  giniCoefficient:'-0.32453',
  AreaUnderPR:'0.77094'
}


const headers = ['Precesion','Timestamp', 'Scheduling', 'AreaUnderROC', 'View_Type', 'giniCoefficient', 'AreaUnderPR']

export default function BasicTable(props) {
  return (
    <div className='tableContainer' >
      <div className='tableHeader'>
          {headers.map(header=>(
           <div className='tableData'>{header}</div>
          ))}
      </div>
      <TableCard data={tableData}/>
      {props.data.map(data=>(
        <TableCard data={data}/>
      ))}
    </div>
  );
}
