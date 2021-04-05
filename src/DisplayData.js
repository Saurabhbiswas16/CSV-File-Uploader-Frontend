import React, { useEffect, useState } from 'react'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

function DisplayData({csvData}) {
    const [fetchedData, setfetchedData] = useState([])
    const [keys, setKeys] = useState([])
        useEffect(() => {
            setfetchedData(csvData);
            setKeys(Object.keys(csvData[0]));
            console.log(fetchedData);
        return () => {
            
        }
    }, [csvData])
    const classes = useStyles();
    return (
        <div>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {keys.map((data1,ind)=>(
                            <StyledTableCell>{data1}</StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                {fetchedData.map((data,index)=>(
                    <StyledTableRow key={index}>
                        {keys.map((data1,ind)=>(
                            
                            <StyledTableCell component="th" scope="row" key={ind}>{data[data1]}</StyledTableCell>
                        ))}
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    )
}

export default DisplayData
