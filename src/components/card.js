import React from 'react'

import PropTypes from 'prop-types'

import './card.css'

const Card = (props) => {
  return (
    <div className={`card-card ${props.rootClassName} `}>
      <span className="card-text10">{props.text}</span>
      <span className="card-text11">
        <span>Unlimited sandbox testing and</span>
        <br className="card-text13"></br>
        <br></br>
        <span>production access for up to 25</span>
        <br className="card-text16"></br>
        <br></br>
        <span>connected businesses for life.</span>
      </span>
      <div className="card-get-started">
        <span className="card-text19">{props.text2}</span>
      </div>
      <span className="card-text20">{props.text1}</span>
      <div className="card-bullet-points">
        <div className="card-point1">
          <svg viewBox="0 0 877.7142857142857 1024" className="card-icon1">
            <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
          </svg>
          <span className="card-text21">{props.text3}</span>
        </div>
        <div className="card-point2">
          <svg viewBox="0 0 877.7142857142857 1024" className="card-icon3">
            <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
          </svg>
          <span className="card-text22">{props.text4}</span>
        </div>
        <div className="card-point3">
          <svg viewBox="0 0 877.7142857142857 1024" className="card-icon5">
            <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
          </svg>
          <span className="card-text23">{props.text5}</span>
        </div>
        <div className="card-point4">
          <svg viewBox="0 0 877.7142857142857 1024" className="card-icon7">
            <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
          </svg>
          <span className="card-text24">{props.text6}</span>
        </div>
      </div>
    </div>
  )
}

Card.defaultProps = {
  text1: "What's included",
  text3: 'Sed ut pespiciatis unde omnis',
  text5: 'Sed ut pespiciatis unde omnis',
  text: 'Pay as you go',
  text6: 'Sed ut pespiciatis unde omnis',
  text2: 'Start for free',
  rootClassName: '',
  text4: 'Sed ut pespiciatis unde omnis',
}

Card.propTypes = {
  text1: PropTypes.string,
  text3: PropTypes.string,
  text5: PropTypes.string,
  text: PropTypes.string,
  text6: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
}

export default Card
