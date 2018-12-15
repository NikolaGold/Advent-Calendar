import React, { Component } from 'react';
import './CalendarItem.css';


class CalendarItem extends Component{
	render(){
		const content = <div>{this.props.day}</div>
		return(
			<button className="item-container" onClick={() => this.props.onModalClick(content)}>

				<span>{this.props.day}</span>
			
			</button>
		)
	}

}


export default CalendarItem;