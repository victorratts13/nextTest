import io from 'socket.io-client';
var socket = io();
socket.on('event', data => {
    console.log('type '+data)
    
})
const Count = () => {
    return <div></div>
}

export default Count;