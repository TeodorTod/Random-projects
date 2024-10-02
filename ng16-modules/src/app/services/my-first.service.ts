import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages: Array<any> = [];

  constructor() {
    this.init();
   }

  init(): void {
    this.insert({
      name: 'Gencho',
      email: 'test@test.com',
      message: 'test msg'
    });
    this.insert({
      name: 'John',
      email: 'john@john.com',
      message: 'john msg'
    });
    this.insert({
      name: 'Peter',
      email: 'peter@peter.com',
      message: 'peter msg'
    });
  }

  insert(message: { name: string, email: string, message: string }): void {
    this.messages.push(message);
  };

  getAllMessages(): any {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
