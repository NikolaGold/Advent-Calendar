import React, { Component } from 'react';
import CalendarItem from './CalendarItem/CalendarItem.js';
import items from './Items/Items.js';

import './AdventCalendar.css';


class AdventCalendar extends Component{
	constructor(props){
		super(props);
		this.state = {
			modalIsOpen: false,
			modalContent: <div>AHOJ</div>,
			headingContent: ""
		};
	}
	render(){
		return(
			<div className="calendar-container">
				{this.renderCalendarItems()}
				{this.state.modalIsOpen && <div id="modal">
					<button type="button" className="close" aria-label="Close" id="close" onClick={() => this.closeModal()}>x</button>
					<h1 className="text-center">{this.state.headingContent}</h1>
					<p className="text-center">{this.state.modalContent}</p>
				</div>}
			</div>
			)
	}

	closeModal() {
		this.setState({modalIsOpen:false});
		console.log('close');

	}

	openModal(heading,content){
		this.setState({modalIsOpen:true, headingContent: heading, modalContent: content});
		console.log('open');
	}

	renderCalendarItems(){
		return items.map((item)=> <CalendarItem onModalClick={(heading,content) => this.openModal(heading,content)} item={item}/>);
		
	}


}


export default AdventCalendar;
