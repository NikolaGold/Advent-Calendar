import React, { Component } from 'react';
import CalendarItem from './CalendarItem/CalendarItem.js';
import './AdventCalendar.css';


class AdventCalendar extends Component{
	constructor(props){
		super(props);
		this.state = {
			modalIsOpen: false,
			modalContent: <div>AHOJ</div>
		};
	}
	render(){
		return(
			<div className="calendar-container">
				{this.renderCalendarItems()}
				{this.state.modalIsOpen && <div id="modal">
					<button id="close" onClick={() => this.closeModal()}>Close</button>
					{this.state.modalContent}
				</div>}
			</div>
			)
	}

	closeModal() {
		this.setState({modalIsOpen:false});
		console.log('close');

	}

	openModal(content){
		this.setState({modalIsOpen:true, modalContent: content});
		console.log('open');
	}

	renderCalendarItems(){
		const items = [{day: 3, content: <div>LOL 3 day, lolol</div>},13,22,11,7,14,23,19,10,20,9,15,24,2,17,6,8,1,18,5,16,21,4,12];

		return items.map((n)=> <CalendarItem onModalClick={(content) => this.openModal(content)} day={n}/>);
		
	}

}


export default AdventCalendar;
