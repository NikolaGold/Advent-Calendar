import React, { Component } from 'react';
import CalendarItem from './CalendarItem/CalendarItem.js';
import Day1 from './days/Day1.js';
import Day2 from './days/Day2.js';
import Day3 from './days/Day3.js';
import Day4 from './days/Day4.js';
import Day5 from './days/Day5.js';
import Day6 from './days/Day6.js';
import Day7 from './days/Day7.js';
import Day8 from './days/Day8.js';
import Day9 from './days/Day9.js';
import Day10 from './days/Day10.js';
import Day11 from './days/Day11.js';
import Day12 from './days/Day12.js';
import Day13 from './days/Day13.js';
import Day14 from './days/Day14.js';
import Day15 from './days/Day15.js';
import Day16 from './days/Day16.js';
import Day17 from './days/Day17.js';
import Day18 from './days/Day18.js';
import Day19 from './days/Day19.js';
import Day20 from './days/Day20.js';
import Day21 from './days/Day21.js';
import Day22 from './days/Day22.js';
import Day23 from './days/Day23.js';
import Day24 from './days/Day24.js';
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
					<button type="button" class="close" aria-label="Close" id="close" onClick={() => this.closeModal()}>x</button>
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
		const items = [{day: 3, content: <Day3/>},{day: 24, content: <Day24/>},{day: 1, content:<Day1/>},{day: 18, content: <Day18/>},{day:5, content: <Day5/>},{day: 10, content: <Day10/>},{day: 23, content: <Day23/>},{day: 12, content: <Day12/>},{day: 15, content: <Day15/>},{day: 20, content: <Day20/>},{day: 14, content: <Day14/>},{day: 7, content: <Day7/>},{day: 6, content: <Day6/>},{day: 16, content: <Day16/>},{day: 8, content: <Day8/>},{day: 6, content: <Day6/>},{day: 11, content: <Day11/>},{day: 21, content: <Day21/>},{day: 2, content: <Day2/>},{day: 4, content: <Day4/>},{day:9, content: <Day9/>},{day: 19, content: <Day19/>},{day:13, content: <Day13/>},{day:17, content: <Day17/>},{day:22, content: <Day22/>}]
		return items.map((n)=> <CalendarItem onModalClick={(content) => this.openModal(content)} item={n}/>);
		
	}

}


export default AdventCalendar;
