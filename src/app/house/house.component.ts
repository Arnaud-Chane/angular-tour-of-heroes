import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../interface/housing-location';
import { HouseLocationComponent } from '../house-location/house-location.component';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-house',
  standalone: true,
  imports: [HouseLocationComponent, CommonModule],
  templateUrl: './house.component.html',
  styleUrl: './house.component.scss',
})
export class HouseComponent implements OnInit {
  housingLocationsList!: HousingLocation[];

  constructor(private housingService: HousingService) {}

  ngOnInit() {
    this.housingLocationsList = this.housingService.getData();
  }
}
