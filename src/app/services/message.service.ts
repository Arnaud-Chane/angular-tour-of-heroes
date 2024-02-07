import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageSubject = new BehaviorSubject <string>('');
  public messageContent = this.messageSubject.asObservable();

  constructor() { }

  sendData(data: any){
    this.messageSubject.next(data);
  }
}
