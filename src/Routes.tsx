import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Asset from './page/Asset'
import Dashboard from './page/Dashboard'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/asset" component={Asset} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes