import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HousingLocation } from "../interface/housing-location";
import { housingLocations } from "../api/data";

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor() { }

  getData(): HousingLocation[] {
    return housingLocations;
  }
}
