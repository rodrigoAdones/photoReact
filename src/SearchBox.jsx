import React from 'react'
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col, Panel } from 'react-bootstrap'

export default class SearchBox extends React.Component {
  constructor (props) {
    super(props)

    this.actionText = this.actionText.bind(this)
    this.clickSubmit = this.clickSubmit.bind(this)
  }

  render () {
    return (
      <Grid>
        <Row>
          <Col lg={6} lgOffset={3} md={8} mdOffset={2}>
            <Panel>
              <form>
                <FormGroup>
                  <ControlLabel>Search</ControlLabel>
                  <FormControl type='text' id='searchField' onKeyPress={this.actionText} placeholder='What do you want?' />
                </FormGroup>
                <Button type='submit' onClick={this.clickSubmit}>
                  Search
                </Button>
              </form>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }

  actionText (e) {
    // disparara busqueda al presionar enter solamente
    if (e.charCode === 13) {
      e.preventDefault()
      if (e.target.value.length > 0) {
        this.props.onSubmit(e.target.value)
      }
    }
  }

  clickSubmit (e) {
    // disparara la busqueda al presionar el boton
    e.preventDefault()

    let string = document.getElementById('searchField').value

    if (string.length > 0) {
      this.props.onSubmit(string)
    }
  }
}
