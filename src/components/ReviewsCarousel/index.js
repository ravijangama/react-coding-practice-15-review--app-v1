// Write your code here
import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {count: 0}

  getReviewListItem = () => {
    const {count} = this.state
    const {reviewsList} = this.props
    return reviewsList[count]
  }

  clickLeftArrow = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  clickRightArrow = () => {
    const {count} = this.state
    const {reviewsList} = this.props
    if (count < reviewsList.length - 1) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {
      imgUrl,
      username,
      companyName,
      description,
    } = this.getReviewListItem()

    const jsxElement = (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="arrow-container">
          <button
            type="button"
            data-testid="leftArrow"
            className="arrow-btn"
            onClick={this.clickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt="left arrow"
            />
          </button>
          <div className="review-container">
            <img src={imgUrl} alt={username} />
            <p className="user-name">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            type="button"
            data-testid="rightArrow"
            className="arrow-btn"
            onClick={this.clickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
    return jsxElement
  }
}
export default ReviewsCarousel
