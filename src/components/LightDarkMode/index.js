// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    whiteMode: false,
  }

  changeMode = () => {
    this.setState(prevState => ({
      whiteMode: !prevState.whiteMode,
    }))
  }

  render() {
    const {whiteMode} = this.state
    let changeMode
    let buttonText
    let heading

    if (whiteMode === true) {
      changeMode = 'whiteContainer'

      buttonText = 'Dark Mode'
      heading = 'headingWhite'
    } else {
      changeMode = 'blackContainer'

      buttonText = 'Light Mode'

      heading = 'headingBlack'
    }

    return (
      <div className="container">
        <div className={changeMode}>
          <h1 className={heading}>Click To Change Mode</h1>

          <div>
            <button type="button" onClick={this.changeMode}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
