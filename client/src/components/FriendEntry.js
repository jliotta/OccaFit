import React from 'react'
import { Icon, Item } from 'semantic-ui-react'


const FriendEntry = (props) => (
  
    <Item>
      <Item.Image size='tiny' src='/assets/images/avatar/large/jenny.jpg' />

      <Item.Content verticalAlign='middle'>
        <Item.Header>
          {props.user.name}
        </Item.Header>
      </Item.Content>
    </Item>
  
)

export default FriendEntry

