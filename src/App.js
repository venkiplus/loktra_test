import React, { Component } from 'react';
import './App.css';
import { Grid, Col, Button, Row, Popover, OverlayTrigger, Modal } from 'react-bootstrap'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      target: 1000,
      targetReached: 0,
      show : false
    };
  }

  donate() {
    if(this.state.target === this.state.targetReached){
      return;
    }
    this.setState({targetReached: this.state.targetReached+50});
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    var width = ((this.state.targetReached/this.state.target)*100)+'%';
    var targetPending = this.state.target - this.state.targetReached;
    const popoverHoverFocus = (
      <Popover id="popover-trigger-hover-focus">
        <strong>${targetPending} still needed for this project.</strong>
      </Popover>
    );
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Online Donation</h1>
        </header>
        <Grid>
        <Row className="show-grid">
        <Col xs={12} md={12}>
        <OverlayTrigger
          trigger={['hover', 'focus']}
          placement="top"
          overlay={popoverHoverFocus}
        >
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{width}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </OverlayTrigger>
            <div className='panel'>
              <p>
                <span className='days-left'>Only 3days left</span> to fund this project.
              </p>
              <p>
                Join the 30 other donors who have already supported this project. Every dollar helps.
              </p>
              <Row className="show-grid">
              <Col xs={6} md={6}>
                <input type='text' className='form-control' value='$50' name='amount' readOnly/>
                <a href=''>Why give $50?</a>
              </Col>
              <Col xs={6} md={6}>
                <Button bsStyle="success" className="btn-block" onClick={()=>this.donate()}>Give Now</Button>
              </Col>
              </Row>
            </div>
            <Row className="show-grid">
              <Col xs={6} md={6}>
                <Button className="btn-block"  onClick={()=>this.handleShow()}>Save for later</Button>
                <Modal show={this.state.show} onHide={()=>this.handleClose()}>
                  <Modal.Header closeButton>
                    Saved!
                  </Modal.Header>
                </Modal>
              </Col>
              <Col xs={6} md={6}>
                <a href='http://twitter.com/intent/tweet?status=Yay, I Donated' target='_blank'><Button className="btn-block">Tell your friends</Button></a>
              </Col>
            </Row>
            </Col>
        </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
