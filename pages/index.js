//import Count from '../components/count';
import { Component } from 'react';
import io from 'socket.io-client';
import Head from '../components/head';
import Menu from '../components/nav';
class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            event: ''
        }
    }

    componentDidMount(){
        this.socket = io()
        this.socket.on('event', data => {
            this.setState({
                event: data
            })
        })
    }

    render(){
        return(
            <>
            <Head></Head>
            <Menu></Menu>
            <div>{this.state.event}</div>
            </>
        )
    }
}

export default index;
/*
function index() {
    return (
        <>
            <Head></Head>
            <Menu></Menu>
            <div></div>
        </>
    )
}

export default index
*/