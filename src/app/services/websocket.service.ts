import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket: WebSocket;
  private readonly serverUrl = 'ws://localhost:8080'; 

  constructor() {
    this.socket = new WebSocket(this.serverUrl);

    this.socket.onmessage = (event) => {
     
      console.log('Received message:', event.data);
    };
  }

  sendMessage(message: string) {
    this.socket.send(message);
  }
}
