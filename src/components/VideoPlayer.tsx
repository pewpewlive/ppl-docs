import React from "react"

interface VideoPlayerProps {
  url: string
  controls?: boolean
  playing?: boolean
  loop?: boolean
}

export default function VideoPlayer({
  url,
  controls = false,
  playing = false,
  loop = false,
}: VideoPlayerProps): JSX.Element {
  return (
    <video
      src={url}
      controls={controls}
      autoPlay={playing}
      loop={loop}
      muted={playing}
      playsInline
      style={{ maxWidth: "100%", width: "100%", height: "auto" }}
    />
  )
}
