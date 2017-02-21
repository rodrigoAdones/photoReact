import React from 'react'
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'

export default class ResultBoard extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      activePage: 1
    }
  }

  render () {
    const lista = this.props.resultList
    return (
      <Grid style={{paddingBottom: '7em'}}>
        <Row>
          {lista.map((result) =>
            <Col className='cuadro-th' xs={6} md={3} key={result.id + '_col'}>
              <Thumbnail key={result.id} href='' width='200' alt='171x180' src={result.previewURL} />
            </Col>
          )}
        </Row>
      </Grid>
    )
  }

}
