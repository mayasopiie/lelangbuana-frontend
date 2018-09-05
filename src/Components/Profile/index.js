import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Button, Row, Col } from 'reactstrap'
import axios from 'axios'
import {Link} from 'react-router-dom'

const request = axios.create({
    baseURL: 'https://lelangbuana.herokuapp.com' || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

const styles = {
    size: {
        width:'120px',
        height: '120px'
    },
    text: {
        textAlign: 'center'
    }
}

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            phone_number: '',
            profile_photo: ''

        }
    }

    componentDidMount(){
        request
            .get(`/users/id/${localStorage.getItem('user_id')}`)
            .then((response) => {return response})
            .then(data => {
                this.setState({
                    username: data.data.user.username,
                    phone_number: data.data.user.phone_number,
                    profile_photo: data.data.user.profile_photo
                })
            })
            .catch(error=>{console.log(error)})
                                
                            
    }

    render(){
        return (
            <ListGroup>
                <ListGroupItem>
                    <Row>
                        <Col>
                            <img className="mx-auto d-block" style={styles.size} src={this.state.profile_photo} alt="Profile" ></img>
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col><span>{this.state.username}</span></Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col><span>{this.state.phone_number}</span></Col>
                        <Col></Col>
                    </Row>
                    
                </ListGroupItem>
                <Button color="warning" size="lg"><Link 
                    className="text-white" to="/create">Create Auction
                </Link></Button>
                <ListGroupItem><Link className="text-dark" to="/" >Home</Link></ListGroupItem>
                <ListGroupItem><Link className="text-dark" to="/mybid" > My Bid </Link></ListGroupItem>
                <ListGroupItem><Link className="text-dark" to="/myauction" > My Auction </Link></ListGroupItem>
                <ListGroupItem tag="a" href="" >Setting Profile</ListGroupItem>
            </ListGroup>
        )
    }
}
export default Profile