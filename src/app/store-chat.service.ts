import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreChatService {
  messages = [
    {
      id: 1,
      message: 'hello everyone. How are you?',
      avatar: 'http://intocode.ru/d/react-chat/avatars/admin.jpg',
      like: false
    },
    {
      id: 2,
      message: 'Как живется на карантине? Мне плохо',
      avatar: 'http://intocode.ru/d/react-chat/avatars/adam.jpg',
      like: false
    },
    {
      id: 3,
      message: 'Эту домашку нужно выполнить во что бы то не стало!',
      avatar: 'http://intocode.ru/d/react-chat/avatars/admin.jpg',
      like: false},
    {
      id: 4,
      message: 'Я так говорю о всех домашках',
      avatar: 'http://intocode.ru/d/react-chat/avatars/no-avatar.jpg',
      like: false
    },
    {
      id: 5,
      message: 'Но эта особенная...',
      avatar: 'http://intocode.ru/d/react-chat/avatars/adam.jpg',
      like: false
    }
  ];
  onlyLike = false;
  getOnlyLike() {
    return this.onlyLike;
  }
  toggleOnlyLike() {
    this.onlyLike = !this.onlyLike;
  }
  getMessage() {
    let items;
    if (this.onlyLike){
      items = this.messages.filter( item => item.like);
    }
    else {
      items = this.messages;
    }
    return items;
  }
  toggleLike(id) {
    this.messages = this.messages.map(item => {
      if (item.id === id) {
        return {
          ...item,
          like: !item.like
        };
      }
      return item;
    });
  }


  constructor() {
  }
}
