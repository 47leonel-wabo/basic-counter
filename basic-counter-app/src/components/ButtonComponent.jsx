import React from 'react'
import PropTypes from 'prop-types'
import '../ButtonComponent.css'

class ButtonComponent extends React.Component{

	constructor(){
		super()
		this.state={
			value: 0
		}
	}

	render = () => {
		return (
			<button className="numButton" onClick={this.incrementNumber}>{this.props.btnValue}</button>
			)
	}

	incrementNumber = () => {
		this.setState({
			value: this.state.value + this.props.btnValue
		})
		console.log(this.state.value)
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