import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HousingLocation } from "../interface/housing-location";

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  private housingSubject = new BehaviorSubject <HousingLocation> ({ id: 1, city: 'New York', wifi: true });
  public housingContent = this.housingSubject.asObservable();

  constructor() { }

  getData(data: any) {
    this.housingSubject.next(data);
  }
}
