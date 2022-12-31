import { Component, Input, OnInit } from '@angular/core';
import { Powiadomienie } from '../powiadomienie.model';

@Component({
  selector: 'app-powiadomienie',
  templateUrl: './powiadomienie.component.html',
  styleUrls: ['./powiadomienie.component.css']
})
export class PowiadomienieComponent{

  @Input() powiadomienie!: Powiadomienie

}
