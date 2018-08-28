import React, { Component } from 'react'
import { Media, ListGroup, ListGroupItem, Button } from 'reactstrap'

class Profile extends Component {
    render(){
        return (
            <ListGroup>
                <ListGroupItem>
                    <Media>
                        <Media left >
                            <Media object data-src="holder.js/64x64" alt="image" />
                        </Media>
                        <Media body>
                            <Media heading>
          Username
                            </Media>
        +6281-888-888
                        </Media>
                    </Media>
                    
                </ListGroupItem>
                <Button color="warning"> Create An Auction</Button>
                <ListGroupItem tag="a" href="" action>Home</ListGroupItem>
                <ListGroupItem tag="a" href="" action>My Bid</ListGroupItem>
                <ListGroupItem tag="a" href="" action>My Auction</ListGroupItem>
                <ListGroupItem tag="a" href="" action>Setting Profile</ListGroupItem>
                <ListGroupItem tag="a" href="" action>Logout</ListGroupItem>
            </ListGroup>
        )
    }
}
export default Profile