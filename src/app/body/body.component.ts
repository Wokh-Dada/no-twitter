import { Component, OnInit } from '@angular/core';
import {StoreChatService} from '../store-chat.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor( private chatService: StoreChatService ) { }
  getMessage() {
    return this.chatService.getMessage();
  }
  getOnlyLike() {
    return this.chatService.getOnlyLike();
  }
  toggleOnlyLike(){
    this.chatService.toggleOnlyLike();
  }
  toggleAll() {
    this.chatService.toggleAll();
  }
  toggleLike(id){
    this.chatService.toggleLike(id);
  }
  ngOnInit(): void {
  }

}
