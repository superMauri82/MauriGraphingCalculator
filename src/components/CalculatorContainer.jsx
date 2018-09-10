import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import FeedbackDisplay from './FeedbackDisplay'
import KeyboardAndDisplay from './Keyboard'
import Graphic  from './Graphic'

const CalculatorContainer = () => (

    <Grid  container stacked divided columns={2}>
      <Grid.Row stretched >
        <Grid.Column>
          <Segment>
            <FeedbackDisplay/>
          </Segment>
          <Segment>
            <KeyboardAndDisplay/>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Graphic />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>

)

export default CalculatorContainer;