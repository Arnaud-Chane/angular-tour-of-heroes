import { Component, Input } from '@angular/core';
import { HousingLocation } from '../interface/housing-location';

@Component({
  selector: 'app-house-location',
  standalone: true,
  imports: [],
  templateUrl: './house-location.component.html',
  styleUrl: './house-location.component.scss',
})
export class HouseLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
