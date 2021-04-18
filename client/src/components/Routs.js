import { Switch, Route } from 'react-router-dom'
import {MainPage} from "../pages/MainPage"
import {UploadPage} from "../pages/UploadPage"
import {PlayerPage} from "../pages/PlayerPage"
import React from "react"

export const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route path='/upload' component={UploadPage}/>
            <Route path='/player' component={PlayerPage}/>
        </Switch>
    </main>
)