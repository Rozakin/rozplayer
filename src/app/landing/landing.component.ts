import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HostService } from '../shared/host.service';
import { JoinService } from '../shared/join.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{

  constructor(private router: Router, private route: ActivatedRoute, private hostService: HostService, private joinService: JoinService) { }

  link = ''

  ngOnInit(): void {
    if(this.route.snapshot.fragment){
      this.hostService.connect(this.route.snapshot.fragment!.split('&')[0].split('=')[1], (res: boolean)=>{
        if(res){
          console.log('Autoryzacja przeszla pomyslnie')
          this.router.navigate(['hosting', 'tworzenie'])
        }else{
        console.log('cos poszlo nie tak');
       }
      })
    }
    var client_id = 'c2aae051f3974f19880699aa2fa79bf2';
    var redirect_uri = window.location.href;
    var scope = 'user-read-private user-read-email streaming user-read-playback-state user-modify-playback-state user-read-currently-playing';
    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    this.link = url;
  }
}
