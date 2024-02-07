import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  Inject,
} from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  hero: string = 'Windstorm';

  @Input() inputFromParent: string = '';
  ngOnInit(): void {}

  textToParent: string = 'This is for parent from child !';
  textThroughtService: string = "Message throught service";
  @Output() updatedText = new EventEmitter<string>();

  // constructor(textToParent: string) {
  //   this.textToParent = textToParent;
  // }

  constructor(private messageService: MessageService){}

  PostData() {
    this.updatedText.emit(this.textToParent);
    this.messageService.sendData(this.textThroughtService);
  }
}
