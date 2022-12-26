import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostService } from 'src/app/shared/host.service';

@Component({
  selector: 'app-tworzenie',
  templateUrl: './tworzenie.component.html',
  styleUrls: ['./tworzenie.component.css']
})
export class TworzenieComponent implements OnInit{
  constructor(private host: HostService, private router: Router) {}
  nazwa = '';
  ngOnInit(): void {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < 7; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      this.nazwa =  result;
  }

  next(){
    this.host.creating(this.nazwa, (res: boolean)=>{
      console.log(res)
      this.router.navigate(['hosting'])
    })
  }

  
}
