import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Route, Switch} from "react-router";
import {ConnectedRouter} from "react-router-redux";
import history from './history';
import store from './store';
import routes from './routes/index';
import MainLayout from './layouts/MainLayout';
import 'antd/dist/antd.css';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                {
                    routes.map(({path, exact = false, component, layout}, index) => {
                        return <Route key={`ROUTE_${index}`} exact={exact} path={path} layout={layout} component={(props) => {
                            return (
                                <MainLayout {...props} component={component}/>
                            );
                        }}/>
                    })
                }
            </Switch>
        </ConnectedRouter>
    </Provider>
    , document.querySelector('#root'));
