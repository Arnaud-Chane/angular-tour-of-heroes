import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

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

  textToParent: string = "This is for parent from child !";
  @Output() updatedText = new EventEmitter <string> ();

  PostData() {
    this.updatedText.emit(this.textToParent);
  }
}