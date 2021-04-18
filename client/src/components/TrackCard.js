import React from 'react'
import 'bootstrap'
import {Link} from "react-router-dom"

export function TrackCard ({id}) {
    return (
        <div className="col p-2">
            <button type="button" className="btn btn-outline-secondary m-auto bg-light">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                         xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                         preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c"/>
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">TrackName</text>
                    </svg>

                    <div className="card-body">
                        <p className="card-text">artist</p>
                    </div>
                </div>
            </button>
        </div>
    )
}