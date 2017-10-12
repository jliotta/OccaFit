import React from 'react'
import { Icon, Item, Divider } from 'semantic-ui-react'


const FriendEntry = (props) => (
  
    <Item>
      <Item.Image onClick={() => {props.handleUserClick(props.user)}} 
      			  size='tiny' 
      			  src='/daniel.jpg' 
      			  id="friendImage"
      			  shape='circular'/>


      <Item.Content verticalAlign='middle'>
        <Item.Header id="friendName">
          {props.user.name}
        </Item.Header>
      </Item.Content>
    </Item>
  
)

export default FriendEntry