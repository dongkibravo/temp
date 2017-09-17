import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Root} from './temp/components/Root';
import {Home} from './temp/components/Home';
import {User} from './temp/components/User';

class App extends React.Component{
    render(){
        return(
            <Router>
                <Root>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/user/:id" component={User} />
                    </Switch>
                </Root>
            </Router>
        )
    }
}

export default App