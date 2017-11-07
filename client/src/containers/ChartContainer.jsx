import React from "react"
import ChartList from "../components/ChartList"

class ChartContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    xhr.addEventListener("load", () => {
      const data = JSON.parse(xhr.response)
      this.setState({
        songs: data.feed.entry
      })
      console.log(data.feed.entry)
    })
    xhr.send()
  }

  render() {
    return (
      <div>
        <h1>UK Top 20</h1>
        <ChartList songs={this.state.songs} />
      </div>
    )
  }
}

export default ChartContainer
