import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-chat',
  imports: [
    // TranslateModule, 
    FormsModule, 
    CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  standalone: true,
  // providers: [TranslateService]
})
export class ChatComponent {
  question: any;
  messages: Message[] = [];
  loading = false;
  send() {
    this.messages.push({ role: 'user', content: this.question });
    this.question = '';
    this.loading = true;
    setTimeout(() => {
      this.messages.push({ role: 'assistant', content: 'Resposta do assistente...' });
      this.loading = false;
    }, 2000);
    
    throw new Error('Method not implemented.');
  }

}
