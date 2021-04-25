import {Container,Row,Col} from 'react-bootstrap'

import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <Container fluid className="footer-container">
      <Container>
      <Row>
        <Col md={5}>
            <div>© 2016-2021 ReactForU. All Rights Reserved.</div>
        </Col>
        <Col md={7}>
          <Row>
              <Col>Terms of Use</Col>
              <Col>Privacy Policy</Col>
              <Col>Copyright Notice</Col>
          </Row>
        </Col>
      </Row>
      </Container>
    </Container>
  )
}

export {Footer};