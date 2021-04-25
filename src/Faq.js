import {Container,Row,Col,Accordion,Card} from 'react-bootstrap'
import './Faq.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Faq = () => {

  const faqObj = [
    {
      'ques':"Who should take an Online Course?",
      'ans':"Students join our online courses for a variety of reasons and come from diverse backgrounds, professions, and age groups. With online courses, you can\
              Advance your skill-set or begin a career change. \
              Take the next step in your formal education or \
              Ease the transition before entering a full-time academic program or \
              Enjoy learning a new topic.\
              Whatever the reason, our online courses are a flexible way of learning about the art world without disrupting your daily life."
    },
    {
      'ques':"Are there prerequisites or language requirements?",
      'ans':"There are no prerequisites."
    },
    {
      'ques':"What do online courses cost?",
      'ans':"Varies depending on the number of credits or amount of work required."
    },
    {
      'ques':"How long do I have to complete a course?",
      'ans':"Semester courses will be completed during stated weeks of the designated term in which they are offered. Most Summer Term courses are five weeks in length; a few are ten weeks. Assignments and course requirements must be completed by the due dates set by your instructor in the course syllabus. Any variance of this timeframe would need to be pre-approved by the instructor."
    },
    {
      'ques':"What happens if I don’t finish the course?",
      'ans':"If you do not finish the course during the semester enrollment period, and if you do not request an incomplete, the course will appear on your transcript with the grade of N (not completed), or a letter grade that reflects your course participation."
    }
  ]

  const faqList = faqObj.map( (item,index)=>(
      <Accordion key={index} className="faq-item">
        <Card>
          <Accordion.Toggle as={Card.Header} className="faq-ques" eventKey="0">
            {item.ques}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="faq-ans">{item.ans}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    ) )


  return (
  <div className='faq-container'>
    <Container fluid className='faq-container'>
      <Container>
          <Row>
              <Col>
                  <h1 style={{marginBottom:"1rem"}}>FAQs</h1>
              </Col>
          </Row>
          <Row>
            <Col md={{ span: 8, offset: 2 }} sm={{ span: 10, offset: 1 }}>
              {faqList}
            </Col>
          </Row>
      </Container>
    </Container>
  </div>
  )
}

export {Faq};