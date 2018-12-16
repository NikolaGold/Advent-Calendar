import React, { Component } from 'react';
import './CalendarItem.css';


class CalendarItem extends Component{
	render(){
		const content = this.props.item["content"];

		return(
			<button className="item-container" onClick={() => this.props.onModalClick(content)}>

				<span>{this.props.item["day"]}</span>
			
			</button>
		)
	}

}


export default CalendarItem;