import React from "react";
import {Switch, Route} from "react-router-dom";
//components
import MainPage from "../views/mainPage";

const App = () => {
    return(
        <>
            <Switch>
                <Route exact path='/' component={MainPage}/>
            </Switch>
        </>
    )
}
export default App;