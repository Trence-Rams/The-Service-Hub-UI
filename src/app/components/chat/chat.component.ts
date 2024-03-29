import { Component } from '@angular/core';
import { WebSocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  messages: { sender: string; content: string }[] = [];
  message: string = '';

  constructor(private webSocketService: WebSocketService) {}

  sendMessage() {
    // Send the message to the WebSocket server
    this.webSocketService.sendMessage(this.message);
    // Add the message to the chat interface
    this.messages.push({ sender: 'User', content: this.message });
    // Clear the input field
    this.message = '';
  }
}
