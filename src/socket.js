import openSocket from 'socket.io-client'

const socket = openSocket('http://localhost:8000')

function subscribeToStream(cb) {
  socket.on('twitterData', (data) => cb(null, data))
}

export { subscribeToStream }