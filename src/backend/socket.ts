import { Server, Socket } from "socket.io";
import axios from 'axios';
import { User } from "src/shared/models/user.model";

const io = new Server()

var lista: [{
  room: string,
  token: string
}] = [{room: '', token: ''}]

io.on('connection', socket=>{
  if(socket.handshake.auth['type']){
    if(socket.handshake.auth['type']=='host'){
      axios
        .get('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: 'Bearer ' + socket.handshake.auth['access_token'],
          },
        })
        .then((odp: any) => {
          if (odp.status == 200) {
            return odp.data;
          } else {
            throw 'no';
          }
        })
        .then((user: User) => {
          console.log(user.email);
          socket.emit('Auth', {
            status: true,
            user: user,
          });
          socket.data['token'] = socket.handshake.auth['access_token'];

          socket.on('createParty', (nazwa: string, callback: Function)=>{creatingParty(socket, nazwa, callback)})
        })
        .catch((err) => {
          socket.emit('Auth', {
            status: false,
          });
          socket.disconnect();
        });
      }else if(socket.handshake.auth['room']){
        if(io.sockets.adapter.rooms.get('room')){
          socket.join(socket.handshake.auth['room'])
          socket.emit('Auth', {
            status: true,
          });
          socket.data['token'] = lista.find(p=>p.room == socket.handshake.auth['room'])?.token;
          console.log('udalo sie')
        }else{
          console.log('rumu jeszcze nie ma')
          socket.emit('Auth', {
            status: false,
          });
          socket.disconnect()
        }
      }else{
        socket.disconnect()
      }

      socket.on('szukaj', (fraza: string, callback: Function)=>{szukaj(socket, fraza, callback)})

      socket.on('dodaj', (uri: string, callback: Function)=>{dodaj(socket, uri, callback)})

  }else{
    //nie ma miejsca dla niego 
    socket.disconnect()
  }
})

function creatingParty(socket: Socket, nazwa: string, callback: Function){
  console.log('I am creatin a party with name '+ nazwa)
  if(io.sockets.adapter.rooms.get(nazwa)){
    callback(false)
  }else{
    socket.join(nazwa)
    lista.push({
      room: nazwa,
      token:  socket.data['token']
    })
    callback(true)
  }
}
function szukaj(socket: Socket, fraza: string, callback: Function){
  axios.get('https://api.spotify.com/v1/search?q=' + encodeURI(fraza) +  '&type=track,episode&limit=5', {headers: {
      'Authorization': 'Bearer ' + socket.data['token'],
  }}, )
  .then(odp=>{
      callback(odp.data.tracks)
  })
}

function dodaj(socket: Socket, uri: string, callback: Function){
  console.log(uri)
  axios.post("https://api.spotify.com/v1/me/player/queue?uri=" + encodeURI(uri), {},{
    headers: {
        'Authorization': 'Bearer ' + socket.data['token'],
    }
  }).then(res=>console.log(res.data))
}

function joinParty(socket: Socket, nazwa: string, callback: Function){}

export { io }