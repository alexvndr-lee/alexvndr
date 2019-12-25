import React from "react";
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from "moment";

const TableComponent = ({ columns, data }) => {
    
    return (
        <Table>
            <TableHead>
                <TableRow>
                    {columns.map((column, index) => (
                        <TableCell key={index}>{column.title}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data && data.map(d => (
                    <TableRow>
                        <TableCell>{d.title}</TableCell>
                        <TableCell>
                            <img src={d.avatar}></img>
                        </TableCell>
                        <TableCell>{d.text}</TableCell>
                        <TableCell>{moment(d.createdAt).subtract(10, "days").format("DD/MM/YYYY")}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default TableComponent;