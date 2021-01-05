import React, {Component} from 'react'
import '../HeadComponent.css'

class HeadComponent extends Component {
	constructor(){
		super()
		this.state = {
			title: 'Basic Dummy Calculator'
		}
	}
	render = () => {
		return (
			<h1>{this.state.title}</h1>
			)
	}
}

export default HeadComponent