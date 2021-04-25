import {Container,Row,Col,Button} from 'react-bootstrap'

import './Banner.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import programmerImage from './programmer2.jpg'
import welcomeIcon from './welcome.svg'

const Banner = () => {
	return (
		<Container fluid className="banner-container">
		<Container>
		  <Row>
		    <Col md={7}>
		    	<Row>
	    			<Col className="margin-col">
			    		<div className="banner-card" style={{background:'#33ccff', marginBottom:"1rem"}}>
			    			<h2>ReactForU</h2>
			    			<h4>Learn every minute details about ReactJS taught by experts.</h4>
			    			<div>
			    				<Button className="card-button">Learn More</Button>
		    				</div>
			    		</div>
		    		</Col>
		    	</Row>
		    	<Row>
		    		<Col className="margin-col">
		    			<div className="banner-card" style={{background:'#fd804b'}}>
		    				<img className="card-image-2" src={programmerImage}/>
		    			</div>
		    		</Col>
		    	</Row>
		    </Col>
		    <Col md={5} className="margin-col">
		    	<div className="banner-card" style={{background:'#1ee592', height:"100%"}}>
	    			<h2>ReactForU X</h2>
	    			<h4>One to one chat with experts.</h4>
	    			<h2>24 x 7</h2>
	    			<div>
	    				<Button className="card-button">Learn More</Button>
    				</div>
	    			<img className="card-image-3" src={welcomeIcon} />
	    		</div>
		    </Col>
		  </Row>
		</Container>
		</Container>
	)
}

export {Banner};