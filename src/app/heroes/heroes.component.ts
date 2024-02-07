import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: string = "Windstorm";

  @Input() inputFromParent: string = "";
  constructor() { }
  ngOnInit(): void {
  }
}