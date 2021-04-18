import React, {useState} from 'react'
import 'bootstrap'
import '../styles/Uploader.css'

export const Uploader = () => {
    const [drag, setDrag] = useState(false)

    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
    }

    function dropHandler(e) {
        e.preventDefault()
        let file = [...e.dataTransfer.files][0]
        console.log(file)
        const formData = new FormData()
        formData.append('file', file)
        setDrag(false)
    }

    return (
        <div className="Uploader">
            {drag
                ? <div className="drop-1"
                       onDragStart = {e => dragStartHandler(e)}
                       onDragLeave = {e => dragLeaveHandler(e)}
                       onDragOver = {e => dragStartHandler(e)}
                       onDrop = {e => dropHandler(e)}
                ><h3> Отпустите здесь файл для загрузки </h3></div>
                : <div className="drop-2"
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                ><h3> Перетащите сюда файл для загрузки </h3></div>

            }
        </div>

    )
}