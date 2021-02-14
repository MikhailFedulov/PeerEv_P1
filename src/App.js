import logo from './logo.svg';
import './App.css';
import DisplayCourses from './components/DisplayCourses'
import CreateCourse from './components/CreateCourse'
import AppMenu from './components/AppMenu'
import Home from './components/Home'
//import { withAuthenticator } from 'aws-amplify-react'
import React from "react";
import Amplify, { Auth } from 'aws-amplify';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import CourseLayout from './components/CourseLayout'
import CourseLayouttest from './components/CourseLayouttest'


function App() {
  return (
    <div className="App">
    <Router >
        <AppMenu />
        <Switch>
            <Route path={"/CreateCourse"} exact component={CreateCourse} />
            <Route path={"/DisplayCourses"} component={DisplayCourses} />
            <Route path={"/Home"} component={Home} />
            <Route path={"/CourseLayout"} component={CourseLayout} />
            <Route path={"/CourseLayouttest"} component={CourseLayouttest} />
        </Switch>

    </Router>
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true});
