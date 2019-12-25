import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { showTable } from "../actions/show-table";
import TableComponent from "../components/TableComponent";
import { withRouter } from "react-router-dom";

class MainPage extends React.Component {
    componentDidMount(){
        this.props.showTable()
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
        ];

        return(
            <div>
                <div className="tableSection">
                    <TableComponent columns={columns} data={this.props.data}></TableComponent>
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
        },
        dispatch
    );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));