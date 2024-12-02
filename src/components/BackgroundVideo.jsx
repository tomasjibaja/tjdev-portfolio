import React, { useRef, useEffect } from 'react'

const BackgroundVideo = () => {

  const videoRef = useRef()

  useEffect(() => {
    videoRef.current.playbackRate = 0.5
  }, [])

  return (
    <div>
      <video ref={videoRef} loop autoPlay muted id='bg-video'>
        <source src={'../video.mp4'} type='video/mp4' play='true' />
      </video>
    </div>
  )
}

export default BackgroundVideo
