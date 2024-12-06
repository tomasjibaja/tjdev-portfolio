import React, { useRef, useEffect } from 'react'
import { useState } from 'react'

const BackgroundVideo = ({ lightOn }) => {

  const videoRef = useRef()
  const [loaded, setLoaded] = useState(false)

  const dark = {
    opacity: '.2',
    filter: 'blur(30px)'
  }

  const light = {
    opacity: '.9',
    // filter: 'blur(30px) invert(1) brightness(1.2) hue-rotate(300deg)',
    filter: 'blur(30px) invert(1) hue-rotate(300deg)'
  }

  useEffect(() => {
    videoRef.current.playbackRate = 0.5
  }, [])

  return (
    <div className='video-wrapper'>
      <video ref={videoRef} loop autoPlay muted style={lightOn ? light : dark} id='bg-video' >
        <source src='../video.mp4' type='video/mp4' play='true' />
      </video>
    </div>
  )
}

export default BackgroundVideo
