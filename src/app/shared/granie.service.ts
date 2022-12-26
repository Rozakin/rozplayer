import { Injectable } from "@angular/core";
import { Track } from "src/shared/models/track.model";
import { SocketService } from "./socket.service";

@Injectable({
    providedIn: 'root'
})
export class GranieService{

  constructor(private socketService: SocketService) {}

  socket = this.socketService.socket;

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