import React from 'react'
import { Anchor, Box, Heading, Paragraph } from 'grommet'
import {observer, inject} from 'mobx-react'
import {NavHeader, Sign} from "../components"
@inject('store')@observer
export default class Main extends React.Component{

render = () =>{
  return(
    <React.Fragment>
    <NavHeader />
      <Box align="center" margin="large">
        
        <Heading>Welcome to Profarer</Heading>
        <Paragraph>
          Profarer is currently Invite only
        </Paragraph>
        <Sign />
      </Box>
      </React.Fragment>
  )
  }
}
