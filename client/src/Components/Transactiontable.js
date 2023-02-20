import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {  IconButton, Typography } from '@mui/material';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';

export default function BasicTable({transaction,fetchTransaction,setEdittransaction }) {
  const token =Cookies.get('token')
  const removeItem=async(_id)=>{
    const res=await fetch( `${process.env.REACT_APP_API_URL}/transaction/${_id}`,{
      method:'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
    if(res.ok){
      fetchTransaction();
    }
  }

  function formatdate(date){
    return dayjs(date).format('DD MMMM,YYYY')
  }
  return (
    <>
     
    <TableContainer component={Paper}>
    <Typography variant="h5" sx={{margin:2}} >
        List of Transaction
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>AMOUNT</TableCell>
            <TableCell align="center">TEXT</TableCell>
            <TableCell align="center">DATE</TableCell>
            <TableCell align="center">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transaction.map(({_id,amount,text,date}) => {
          
          return(
            <TableRow
              key={_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='center'>
                {amount}
              </TableCell>
              <TableCell align="center">{text}</TableCell>
              <TableCell align="center">{formatdate(date)}</TableCell>
              <TableCell align="center">
                <IconButton onClick={()=>setEdittransaction({_id,amount,text,date})}>
                <EditSharpIcon/>
                </IconButton>
                <IconButton onClick={()=>removeItem(_id)}>
                <DeleteSharpIcon />
                </IconButton>
                
              </TableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}