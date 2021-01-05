import React from 'react'
import PropTypes from 'prop-types'
import '../ButtonComponent.css'

class ButtonComponent extends React.Component{

	render = () => {
		return (
			<button className="numButton" onClick={this.incrementNumber}>{this.props.btnValue}</button>
			)
	}

	incrementNumber = () => {
		this.props.incrementMethod(this.props.btnValue)
	}
}

// Defining default property value for this Button Component
ButtonComponent.defaultProps = {
	btnValue: 1
}

ButtonComponent.propTypes = {
	btnValue: PropTypes.number.isRequired
}

export default ButtonComponent