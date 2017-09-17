import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Header from "./app/components/Header";
import Home from "./app/components/Home";

import WorkSpace from './containers/WorkSpace';


class App extends React.Component{
    constructor(){
        super();
        this.state={
            homeLink: "home",
            homeMounted: true,
        }
    }

    onGreet(){
        alert("Hiiiiiiiiiiiii");
    }

    onChangeLinkName(newName){
        this.setState({
            homeLink: newName,
        })
    }

    onChangeHomeMounted(){
        this.setState({
            homeMounted: !this.state.homeMounted
        })
    }

    render(){

        let boxBorder = {border: "1px solid black"};
        let homeCmp = "";
        if (this.state.homeMounted){
            homeCmp = (
                <Home
                    name={"max"}
                    initialAge={29}
                    greet={this.onGreet}
                    changeLink={this.onChangeLinkName.bind(this)}
                    initialLinkName={this.state.homeLink}
                />
            );
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1" style={boxBorder}>
                        {homeCmp}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1" style={boxBorder}>
                        <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-default">Unmount</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
