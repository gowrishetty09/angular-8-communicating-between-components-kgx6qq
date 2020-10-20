import { Component } from '@angular/core';

import { MessageService } from '../_services/index';

@Component({ selector: 'home', templateUrl: 'home.component.html' })
export class HomeComponent {
    constructor(private messageService: MessageService) { }

    sendMessage(): void {
        // send message to subscribers via observable subject
        this.messageService.sendMessage('Message from Home Component to About Component!');
    }

    clearMessages(): void {
        // clear messages
        this.messageService.clearMessages();
    }
}