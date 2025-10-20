import MediaThemeNotflix from 'player.style/notflix/react'
import React from 'react'
import Video from "next-video";
import VideoLa from "/videos/video.mp4";
type VideoContainerProps = {
  onClose: () => void
}

function VideoContainer({ onClose }: VideoContainerProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-lg">
      <div className="relative  rounded-2xl  flex flex-col items-center p-8 max-w-4xl w-full">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 bg-black/40 text-white rounded-full p-2 hover:bg-black/70 z-10"
          onClick={onClose}
          aria-label="Close video"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6l12 12M6 18L18 6"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <MediaThemeNotflix
          style={{
            "--media-primary-color": "#19bc8a",
            "--media-secondary-color": "#23342c",
            "--media-accent-color": "#209774",
            width: "100%",
          }}
        >
          <video
            slot="media"
            src="https://stream.mux.com/fXNzVtmtWuyz00xnSrJg4OJH6PyNo6D02UzmgeKGkP5YQ/low.mp4"
            playsInline
            crossOrigin="anonymous"
          ></video>
        </MediaThemeNotflix>
      </div>
    </div>
  )
}

export default VideoContainer