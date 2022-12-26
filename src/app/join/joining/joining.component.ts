import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joining',
  templateUrl: './joining.component.html',
  styleUrls: ['./joining.component.css']
})
export class JoiningComponent {
  constructor(private router: Router) {}
  join(){
    this.router.navigate([this.nazwa])
  }
  nazwa = '';
}
