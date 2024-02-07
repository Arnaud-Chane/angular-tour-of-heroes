import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'Arnaud';
  forParent: string = "This is for parent";
  forChild: string = "This is for child";

  GetData(text: string) {
    this.forParent = text;
  }

  @ViewChild(HeroesComponent) textFromChild: any;
  GettingData() {
    this.forParent = this.textFromChild.textToParent;
  }
}
