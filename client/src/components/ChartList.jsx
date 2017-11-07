import React from "react"
import ChartListItem from "./ChartListItem"

const ChartList = (props) => {
  const chartListItems = props.songs.map(
    (song, index) => (
      <ChartListItem key={index} song={song} />
    )
  )

  return (
    <ol>{chartListItems}</ol>
  )
}

export default ChartList
