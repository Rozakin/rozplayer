import { Injectable } from "@angular/core";
import { io } from 'socket.io-client'
import { Track } from "src/shared/models/track.model";
import { SocketService } from "./socket.service";

@Injectable({
    providedIn: 'root'
})
export class JoinService{

    constructor(private socketService: SocketService) {}

    socket = this.socketService.socket;

    connect(room: string, cb: Function){
        this.socket = io({
            auth: {
                type: 'join',
                room: room
              }
        });
        this.socket.on('connect', ()=>{
            console.log('Połączono z Socketem!')
          })
        this.socket.on('Auth', (res: { status: boolean})=>{
            if(res.status){
                cb(true);
                this.socketService.socket = this.socket;
                console.log('zalogowano')
            }else{
                cb(false)
            }
        })
    }

    szukaj(q: String, cb: Function){
        this.socket.emit('szukaj', q, (data:{items: Track[]})=>{
            cb(data)
          })
       }

       dodaj(uri: String, cb?: Function){
        console.log(uri)
        this.socket.emit('dodaj', uri, cb)
      }
}