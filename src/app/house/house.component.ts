import { Component } from '@angular/core';
import { HousingLocation } from "../interface/housing-location";
import { HouseLocationComponent } from "../house-location/house-location.component";

@Component({
  selector: 'app-house',
  standalone: true,
  imports: [HouseLocationComponent],
  templateUrl: './house.component.html',
  styleUrl: './house.component.scss'
})
export class HouseComponent {
  housingLocationsList: HousingLocation[] = [
    { id: 1, city: 'New York', wifi: true },
    { id: 2, city: 'Los Angeles', wifi: false },
    { id: 3, city: 'Chicago', wifi: true },
    { id: 4, city: 'Houston', wifi: false },
    { id: 5, city: 'Phoenix', wifi: true },
    { id: 6, city: 'Philadelphia', wifi: false },
    { id: 7, city: 'San Antonio', wifi: true },
    { id: 8, city: 'San Diego', wifi: false },
    { id: 9, city: 'Dallas', wifi: true },
    { id: 10, city: 'San Jose', wifi: false },
  ];
}
