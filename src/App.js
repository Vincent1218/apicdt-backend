import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import TopNavbar from './components/TopNavbar'
import Loading from './components/Loading'
import ProtectedRoute from './auth/ProtectedRoute'

import Home from './views/Home'
import Page1 from './views/Page1'
import Page2 from './views/Page2'

import './App.css';

const App = () => {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <Loading />;
    }

    
    return (
        <div id="app" className="d-flex flex-column h-100">
            <TopNavbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/page1" exact component={Page1} />
                <ProtectedRoute path="/page2" exact component={Page2} />
            </Switch>
            {/*<Footer />*/}
        </div>

    );
    

}

export default App;
