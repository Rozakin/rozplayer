import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Track } from 'src/shared/models/track.model';
import { GranieService } from '../shared/granie.service';
import { JoinService } from '../shared/join.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit{

  constructor(private route: ActivatedRoute, private router: Router,  private joinService: JoinService, private granie: GranieService) {}

  connected = false;
  tracks!: Track[];
  puste = false;

  ngOnInit(): void {
    this.route.params.subscribe(()=>{
      console.log(this.route.snapshot.params)
      this.joinService.connect(this.route.snapshot.params['id'], (res: boolean)=>{
        if(res){
          this.connected = true;
          console.log('Siema, udało ci się')
        }else{
          // this.router.navigate(['joining'])
        }
      })
    })
  }

  onInput(f: string){
    if(f !== '' ){
      this.joinService.szukaj(f, (data: any)=>{
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
    this.joinService.dodaj(uri)
  }

}
