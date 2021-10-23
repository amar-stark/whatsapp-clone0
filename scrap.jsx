import logo from './logo.svg';
import React, { Component, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import NavBar from './components/navBar';
import Contacts from './components/contacts';
import LandingPage from './components/landingPage';
import ChatSkeleton from './components/chatSkeleton';
import './styles/style.css';
import $ from 'jquery';

class App extends React.Component {
	state = {
		contacts: [{
			"id": 1,
			"name": "Anthony Howard Tony Stark",
			"image": "https://picsum.photos/200",
			"lastMessage": "Genius, Playboy, Billionaire, philanthropist, all in one me!!!!!!!!!!!!!!!!!!!!",
			"lastSeen": "Today",
			"isGroup": false,
			"messages": []
		}, {
			"id": 2,
			"name": "Elijah Mikealson",
			"image": "https://picsum.photos/200",
			"lastMessage": "Bye",
			"lastSeen": "Monday",
			"isGroup": false,
			"messages": []
		}, {
			"id": 3,
			"name": "Damon Salvatore",
			"image": "https://picsum.photos/200",
			"lastMessage": "Hey Bon Bon!",
			"lastSeen": "Last week",
			"isGroup": false,
			"messages": []
		}],
		selectedContact: {}
	};


	renderLandingImage = () => {
		if (!Object.keys(this.state.selectedContact).length) return <LandingPage />
		return <ChatSkeleton selectedContact={this.state.selectedContact}/>
	};

	handleContactClick = (contactID) => {
		const selectedContact = this.state.contacts.find(c => c.id == contactID);
		this.setState({selectedContact});
	};

	handleContactSearch = (searchTerm) => {
		const originalContacts = this.state.contacts;

		if (searchTerm !== "") {
			const newContactList = originalContacts.filter (contact => {
				return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
			});
			this.setState({contacts: newContactList});
		} else {
			this.setState({contacts: originalContacts});
		}
	};

	render() {
		return (
			<div className="full-height" style={{display: 'flex'}}>
				<div className="left-portion full-height" style={{flex: '30%', background: '#131c21'}}>
					<div style={{height:"50"}}>
						<NavBar />
					</div>
					<div style={{height: 'calc(100% - 66px)'}}>
						<span id="searchIcon">
							<svg viewBox="0 0 24 24" width="24" height="24" >
								<path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path>
							</svg>
						</span>
						<input type="text" className="form-control searchContacts"  onChange={(e) => this.handleContactSearch(e.target.value)} placeholder="Search or start new chat"/>
						<Contacts 
						contacts={this.state.contacts} 
						onContactClick={this.handleContactClick}
						/>
					</div>
				</div>
				<div style={{ background: '#262D31', flex: '70%'}} className="right-portion full-height">
					{this.renderLandingImage()}
				</div>
			</div>
		);
	}
}
 
export default App;