import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { VilainsComponent } from './vilains/vilains.component';
import { HouseComponent } from './house/house.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroesComponent, VilainsComponent, HouseComponent],
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
