import React, {useState} from 'react'
import axios from 'axios'
import 'bootstrap'
import {Uploader} from '../components/Uploader'

export const UploadPage = () => {
    const [track, setTrack] = useState( {
        title: '', artist: '', file: ''
    })


    const addTrackHandler = async() => {
        try {
            axios.post('/upload/new_track_file').then(resp => {
                const new_track = resp.data
                setTrack(new_track)
                console.log(new_track)
            })
        } catch (e) {}
    }

    const changeHandler = event => {
        setTrack({ ...track, [event.target.name]: event.target.value})
    }

    return (
        <div className="container">
            <div className="row g-0 rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0">Хотите добавить новую композицию?</h3>
                    <p className="mb-auto m-auto">
                        <label htmlFor="title">Название :</label>
                        <input
                            type="text" className="form-control" id="title" placeholder="" value={track.title} required="True"
                            onChange={changeHandler}
                        />
                        <label htmlFor="artist">Исполнитель :</label>
                        <input
                            type="text" className="form-control" id="artist" placeholder="" value={track.artist} required="True"
                            onChange={changeHandler}
                        />
                    </p>
                    <button
                        type="button" className="btn btn-outline-secondary m-auto bg-light"
                        onClick={addTrackHandler}
                        >Добавить
                    </button>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <Uploader/>
                </div>
            </div>
        </div>
    )
}