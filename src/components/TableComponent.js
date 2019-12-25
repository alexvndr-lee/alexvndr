import React from "react";
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from "moment";
import Button from "@material-ui/core/Button";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const TableComponent = ({ columns, data, onClick }) => {
    
    return (
        <Table style={{width: "80%", border: "1px solid black"}}>
            <TableHead>
                <TableRow style={{background: "#bbb", borderBottom: "1px solid black"}}>
                    {columns.map((column, index) => (
                        <TableCell key={index} style={{fontSize: "16px", fontWeight: "700"}}>{column.title}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map(d => (
                    <TableRow>
                        <TableCell>{d.title}</TableCell>
                        <TableCell>
                            <img src={d.avatar} width="60px"></img>
                        </TableCell>
                        <TableCell>{d.text}</TableCell>
                        <TableCell>{moment(d.createdAt).subtract(10, "days").format("DD/MM/YYYY")}</TableCell>
                        <TableCell>
                            <Button onClick={() => onClick(d.id)}><DeleteOutlineIcon/></Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default TableComponent;