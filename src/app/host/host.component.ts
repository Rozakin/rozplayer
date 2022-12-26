import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Track } from 'src/shared/models/track.model';
import { User } from 'src/shared/models/user.model';
import { GranieService } from '../shared/granie.service';
import { HostService } from '../shared/host.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit{
  constructor(private host: HostService, private router: Router, private granie: GranieService) {}

  user!: User;
  tracks!: Track[];
  puste = false;

  ngOnInit(): void {
    this.user = this.host.user;
  }

  onInput(f: string){
    if(f !== '' ){
      this.granie.szukaj(f, (data: any)=>{
        console.log(data)
        this.tracks = data.items;
      })
      if(this.puste){
        this.puste = false;
      }
    }else{
      console.log('Formularz został wyczzyszczony!')
      this.puste = true;
    }
  }
  pusc(uri: string){
    // console.log(uri)
    this.granie.dodaj(uri)
  }
}
