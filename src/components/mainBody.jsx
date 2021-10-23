import React, {  useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import NavBar from './navBar';
import Contacts from './contacts';
import LandingPage from './landingPage';
import ChatSkeleton from './chatSkeleton';
import ContactDetails from './contactDetails';
import NetworkError from './networkError';
import $ from 'jquery';
import Profile from './profile';


const MainBody = (props) => {
	const {AllContacts, onStatusSectionToggle} = props;

	const [contacts, setContacts] = useState(props.contacts);
	const [selectedContact, setSelectedContact] = useState({});
	const [searchCriteria, setSearchCriteria] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [networkError, setNetworkError] = useState(false);

	const renderLandingImage = () => {
		if (!Object.keys(selectedContact).length) return <LandingPage />
		return <ChatSkeleton onContactDetailClick={handleContactDetailClick} contacts={contacts} selectedContact={selectedContact}/>
	};

	setInterval(() => {
		if (!navigator.onLine) {
			setNetworkError(true);
		} else {
			setNetworkError(false);
		}
	}, 3000);

	const handleContactDetailClick = () => {
		const left_portion = $('.left-portion');
		const right_portion = $('.right-portion');
		const contact_details_portion = $('.contact-details-portion');

		left_portion.animate(100).toggleClass('full shrink');
		right_portion.animate(100).toggleClass('full shrink');
		contact_details_portion.animate(200).toggleClass('hide show');
	};

	const handleContactClick = (contactID) => {
		const selectedContact = contacts.find(c => c.id === contactID);
		setSelectedContact(selectedContact);
	};

	const handleContactSearch = (searchTerm) => {
		setSearchCriteria(searchTerm);

		if (searchTerm !== "") {
			const newContactList = contacts.filter (contact => {
				return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
			});
			setSearchResults(newContactList);
		} else {
			setSearchResults(contacts);
		}
	};

	const clearContactSearch = () => {
		handleContactSearch("");
	};

	const handleProfileImageClick = () => {
		const profile_portion = $('.profile-portion');
		profile_portion.animate(100).toggleClass('hide show');
	};
	

	return (
		<section className="full-height" id="main-body-section">
			<div className="full-height d-flex">
				<div className="left-portion full full-height user-no-select">
					<div style={{height:"50"}}>
						<NavBar onProfileImageClick={handleProfileImageClick} onStatusSectionToggle={onStatusSectionToggle}/>
					</div>
					{
						networkError
						?
						<NetworkError/>
						:
						null
					}
					<div style={{height: 'calc(100% - 66px)'}}>
						<span id="searchIcon">
							<svg viewBox="0 0 24 24" width="24" height="24" >
								<path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path>
							</svg>
						</span>
						<input type="text" className="form-control searchContacts" value={searchCriteria}  onChange={(e) => handleContactSearch(e.target.value)} placeholder="Search or start new chat"/>
						<span id="removeIcon" className={searchCriteria.length ? "show" : "hide"} onClick={clearContactSearch}>
							<svg viewBox="0 0 24 24" width="24" height="24">
								<path fill="currentColor" d="M17.25 7.8L16.2 6.75l-4.2 4.2-4.2-4.2L6.75 7.8l4.2 4.2-4.2 4.2 1.05 1.05 4.2-4.2 4.2 4.2 1.05-1.05-4.2-4.2 4.2-4.2z"></path>
							</svg>
						</span>
						<Contacts 
						contacts={searchCriteria.length ? searchResults : contacts} 
						onContactClick={handleContactClick}
						/>
					</div>
				</div>
				<div className="profile-portion hide full-height user-no-select">
					<Profile onReturnFromProfileClick={handleProfileImageClick}/>
				</div>
				<div className="right-portion full full-height">
					{renderLandingImage()}
				</div>
				<div className="contact-details-portion hide full-height user-no-select">
					<ContactDetails onContactClick={handleContactClick} contacts={contacts} selectedContact={selectedContact} onReturnFromProfileClick={handleContactDetailClick}/>
				</div>
			</div>
		</section>
	);
}
 
export default MainBody;