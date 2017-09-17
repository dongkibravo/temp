import React from "react";

export class User extends React.Component {
    onNavigateHome() {
        this.props.history.push('/');
        //https://github.com/ReactTraining/react-router/issues/3498
    }

    render() {
        const { match, location, history } = this.props;
        return (
            <div>
                <h3>The User Page</h3>
                <p>User ID: {match.params.id}</p>
                <button onClick={this.onNavigateHome.bind(this)} className="btn btn-primary">Go Home!</button>
            </div>
        );
    }
}