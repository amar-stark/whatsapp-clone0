import React  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import data from './data/contact.json';
import MainBody from './components/mainBody';
import './styles/style.css';
import StatusSection from './components/statusSection';
import $ from 'jquery';
import LoadingPage from './components/loadingPage';

class App extends React.Component {

	state = {
		selectedStatus : [],
		loadingComplete: false
	};

	componentDidMount() {
		setTimeout(() => {
			window.$('#loading-progress-bar').css('width', '100%');
			setTimeout(() => {
				this.setState({loadingComplete: true})
			}, 5000);
		}, 1000);
	};

	handleStatusSectionToggle = () => {
		$('#status-section').toggle();
		$('#main-body-section').toggle();
	};
	
	handleHideStausesClick = (me) => {
		const muted_statuses_section = $('#muted-statuses');
		me.currentTarget.innerText = muted_statuses_section.is(':visible') ?  "SHOW" : "HIDE";
        muted_statuses_section.slideToggle();
    };

	handleContactStausesClick = (id) => {
		const statusModal = window.$('#statusModal');

		const selectedStatus = data.filter(contact => contact.id === id);

		this.setState({selectedStatus: selectedStatus});

		statusModal.modal('show');
		
		setTimeout(() => {
			window.$('#status-progress-bar').css('width', '100%');
			setTimeout(() => {
				statusModal.modal('hide');
				window.$('#status-progress-bar').css('width', '0%');
			}, 6000);
		}, 500);
	};

	render() { 
		const selectedStatus = this.state.selectedStatus[0];
		
		return (
			<section className="full-height">
				{
				!this.state.loadingComplete ? 
				<LoadingPage />
				:
				<div className="full-height">
					<MainBody 
						contacts={data} 
						onStatusSectionToggle={this.handleStatusSectionToggle} 
					/>
					
					<StatusSection  
						contacts={data} 
						onStatusSectionToggle={this.handleStatusSectionToggle} 
						onHideStausesClick={this.handleHideStausesClick} 
						onContactStausesClick={this.handleContactStausesClick}
					/>

					{
					selectedStatus
					?
					<div className="modal fade" id="statusModal" tabIndex="-1" aria-labelledby="statusModalLabel" aria-hidden="true">
						<div className="modal-dialog modal-dialog-centered modal-fullscreen" style={{background: '#000000'}}>
							<div className="modal-content">

								<div className="text-center progressContainer" >
									<div className="progress">
										<div id="status-progress-bar" className="progress-bar" style={{width: '0%'}} ></div>
									</div>
									<h6 className="mb-1 mt-2" style={{color: '#fff'}}>{selectedStatus.name}</h6>
									<p style={{color: '#fff'}}> {selectedStatus.lastSeen}</p>
								</div>

								<div className="modal-body text-center pt-1 pb-1">

									<span style={{position: 'absolute', right: '19px', top: '19px', color: '#FFFFFF', background: 'transparent'}} className="cursor-pointer" data-bs-dismiss="modal"> 
										<svg viewBox="0 0 24 24" width="24" height="24">
											<path fill="currentColor" d="M19.8 5.8l-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z"></path>
										</svg>
									</span>

									<span style={{position: 'absolute', left: '19px', top: '19px', color: '#FFFFFF', background: 'transparent'}} className="cursor-pointer" data-bs-dismiss="modal"> 
										<svg viewBox="0 0 24 24" width="24" height="24" >
											<path fill="currentColor" d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"></path>
										</svg>
									</span>

									<img src={selectedStatus.image}  draggable="false"  className="full-height cursor-pointer"/>
								</div>

								<div className="text-center" style={{position: 'absolute', bottom: '60px', maxWidth: '360px', left: 0, right: 0, margin: '0 auto', color: '#fff'}}>
									<p>{selectedStatus.latestMessage}</p>
								</div>

								<div className="text-center" style={{position: 'absolute', bottom: '12px', width: 'calc(100% - 40px)', maxWidth: '920px', left: 0, right: 0, margin: '0 auto', padding: '0 20px'}}>
									<div className="d-flex" style={{alignItems: 'center'}}>
										<button className="btn text-white"> 
											<span>
												<svg viewBox="0 0 24 24" width="24" height="24" >
													<path fill="currentColor" d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path>
												</svg>
											</span>
										</button>

										<input type="text" style={{background: '#1C1E1F', opacity: 0.5, border: '1px solid #323739', borderRadius: '8px', height: '40px', padding: '10px 12px', color: '#fff'}} className="form-control chat-input" placeholder="Type a reply..."/>
										
										<button className="btn text-white"> 
											<span>
												<svg viewBox="0 0 24 24" width="24" height="24">
												<path fill="currentColor" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path>
												</svg>
											</span>
										</button>
									</div>
								</div>
								
							</div>
						</div>
					</div>
					:
					null
					}
				</div>
				}
			</section>
		);
	}
}
 
export default App;