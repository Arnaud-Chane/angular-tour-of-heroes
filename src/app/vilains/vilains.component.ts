import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-vilains',
  standalone: true,
  imports: [],
  templateUrl: './vilains.component.html',
  styleUrl: './vilains.component.scss',
})
export class VilainsComponent implements OnInit {
  messageFromHero: string = '';

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.messageContent.subscribe((heroMessage) => {
      this.messageFromHero = heroMessage;
    });
  }
}
