import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { showTable } from "../actions/show-table";
import TableComponent from "../components/TableComponent";
import { withRouter } from "react-router-dom";
import { deleteOne } from "../actions/show-table";
import { deleteAll } from "../actions/show-table";
import Button from "@material-ui/core/Button";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class MainPage extends React.Component {
    componentDidMount(){
        this.props.showTable()
    }

    handleDeleteOne = (id) => {
        this.props.deleteOne(id);
    }

    handleDeleteAll = () => {
        this.props.deleteAll();
        console.log("!3213213wad")
    }

    render(){
        const columns = [
            {
                title: "Title",
            },
            {
                title: "Avatar",
            },
            {
                title: "Text",
            },
            {
                title: "Date",
            },
            {
                title: "",
            }
        ];

        return(
            <div>
                <div className="tableSection" style={{width: "100%", display: "flex", flexFlow: "column", justifyContent: "center", alignItems: "center"}}>
                    <Button className="deleteAllButton" onClick={this.handleDeleteAll} style={{width: "60px", margin: "30px 0"}}><DeleteForeverIcon/></Button>
                    <Button style={{backgroundColor: "green", marginBottom: "15px", color: "#fff"}} onClick={() => this.props.showTable()}>Show All</Button>
                    <TableComponent columns={columns} data={this.props.data} onClick={this.handleDeleteOne}></TableComponent>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.table
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            showTable,
            deleteOne,
            deleteAll
        },
        dispatch
    );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));