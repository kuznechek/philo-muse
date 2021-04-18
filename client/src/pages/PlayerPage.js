import React from 'react'
import 'bootstrap'
import '../styles/Player.css'
import {AudioPlayer} from '../components/AudioPlayer'

export const PlayerPage = () => {
    return (
        <div className="PlayerPage">
            <main>
                <div className="player-banner">

                    <div className="player-container bg-dark">
                        <div className="row g-0 rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-0">Post title</h3>
                                <p className="mb-auto">This is a wider card with supporting text below as a natural
                                    lead-in to additional content.</p>
                                <AudioPlayer></AudioPlayer>

                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <svg className="bd-placeholder-img" width="450" height="450"
                                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c"></rect>
                                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}