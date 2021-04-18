import React from 'react'
import 'bootstrap'
import {TrackCard} from "../components/TrackCard"

export const MainPage = () => {
    return (
        <div className="Main">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <TrackCard/>
                    <TrackCard/>
                    <TrackCard/>
                    <TrackCard/>
                    <TrackCard/>
                    <TrackCard/>
                    <TrackCard/>
                    <TrackCard/>
                    <TrackCard/>
                </div>
            </div>


        </div>
    )
}