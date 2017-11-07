import React from "react"

const ChartListItem = ({song}) => {
  return (
    <li className="song-display">
      <a className="artist-name" href={song["im:artist"].attributes.href}>
        {song["im:artist"].label}
      </a>
      <a className="song-name" href={song.id.label}>
        {song["im:name"].label}
      </a>
      <audio controls="controls" src={song.link[1].attributes.href} />
    </li>
  )
}

export default ChartListItem
