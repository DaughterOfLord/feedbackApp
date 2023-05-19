// Write your React code here.
import {Component} from 'react'
import './index.css'

class feedbackApp extends Component {
  state = {
    isFeedBackSelected: false,
  }

  onClickEmoji = () => this.setState({isFeedBackSelected: true})

  renderFeedBackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="emojis-list">
            {emojis.map(emoji => (
              <li key={emoji.id}>
                <button
                  className="btn"
                  type="button"
                  onClick={this.onClickEmoji}
                >
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    className="emoji-img"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default feedbackApp
