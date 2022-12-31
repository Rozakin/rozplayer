import { Injectable } from "@angular/core";
import { io } from 'socket.io-client'
import { Track } from "src/shared/models/track.model";
import { User } from "src/shared/models/user.model";
import { SocketService } from "./socket.service";

@Injectable({
    providedIn: 'root'
})
export class HostService {
    constructor(private socketService: SocketService) {}
    socket = this.socketService.socket;
    nazwa = '';
    user!: User;
    connect(token: string, cb: Function){
        this.socket = io({
            auth: {
                access_token: token,
                type: 'host'
              }
        });
        this.socket.on('connect', ()=>{
            console.log('Połączono z Socketem!')
          })
        this.socket.on('Auth', (res: { status: boolean, user: User })=>{
            if(res.status){
                cb(true);
                this.user = res.user;
                this.socketService.socket = this.socket;
            }else{
                cb(false)
            }
        })
    }
    creating(name: string, cb: Function){
        this.socket.emit('createParty', name, cb)
        this.nazwa  = name;
    }

    szukaj(q: String, cb: Function){
        console.log(this.socket)
        this.socket.emit('szukaj', q, (data:{items: Track[]})=>{
            cb(data)
          })
       }
    dodaj(uri: String, cb?: Function){
        this.socket.emit('dodaj', uri)
    }
    wyloguj(){
        this.socket.close();
    }
}