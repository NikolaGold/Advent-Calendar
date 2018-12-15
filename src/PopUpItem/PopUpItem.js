import React, { Component } from 'react';


class PopUpItem extends Component {

	render(){
		return(
			<div className="item-container">
				<span>{this.props.day}</span>
			</div>
		);
	}
	
}

export default PopUpItem;