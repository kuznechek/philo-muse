import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import 'bootstrap'

export const AudioPlayer = () => {
    return (
        <ReactAudioPlayer
            src="/home/anastasiwei/WebstormProjects/fullstack-audioplayer/server/storage/Sting - Every Breath You Take (www.hotplayer.ru).mp3"
            autoPlay
            controls
        />
    )
}