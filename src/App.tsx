import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {sieve} from './utilities/sieve';

function App() {

  const [startValue, setStartValue] = useState("");
  const [endValue, setEndValue] = useState("");
  const [primeNumbers, setPrimeNumbers] = useState<Array<number>>([]);

  const onSubmit = () => {
    const myArray = sieve(+startValue, +endValue);
    setPrimeNumbers(myArray)
  };


  return (
    <div>
      <Container >
        <Row>
        <Col>
          <Row className="padding-top-5">
            <Col className="text-center">
              Enter 2 numbers that you want to calculate the Prime Numbers for
            </Col>
          </Row>
          {startValue}
          {endValue}
        <Form className="padding-top-5">
          <Row className="padding-top-1">
            <Col>
              <Form.Label>
                Starting Number:
              </Form.Label>
              <Form.Control placeholder="Start number" type="number" onChange={e => setStartValue(e.target.value)} />
            </Col>
          </Row>
          <Row className="padding-top-1">
            <Col>
              <Form.Label>
                Ending Number:
              </Form.Label>
              <Form.Control placeholder="End number" type="number" onChange={e => setEndValue(e.target.value)} />
            </Col>
          </Row>
          <Row className="padding-top-1">
            <Col>
              <Button variant="primary" type="submit" onClick={onSubmit}>
                Submit
              </Button>
            </Col>
        </Row>
      </Form>  
    </Col>
    <Col>
    <Row className="padding-top-5">

<Col>

<Row className="text-center">
  <Col>
The prime numbers are displayed here:
</Col>
</Row>
    {primeNumbers.length > 0 && primeNumbers.map(number => 
      
      
      <Row>
      <Col className="text-center">
        {number}
      </Col>
  </Row>
      
      )}
      </Col>
    </Row>
    </Col>
    </Row>
  </Container>
</div>
  );
}

export default App;
