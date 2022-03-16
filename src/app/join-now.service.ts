import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JoinNowService {
  baseUrl = 'https://reqres.in/api/users';

  courses = [
    {
      id: 1,
      name: 'Learn JavaScript',
      description:
        'JavaScript is among the most powerful and flexible programming languages of the web. It’s one of the core technologies of web development and can be used on both the front-end and the back-end.',
      image: '../assets/javascript.png',
    },
    {
      id: 2,
      name: 'Learn React',
      description:
        'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.',
      image: '../assets/react.png',
    },
    {
      id: 3,
      name: 'Learn TypeScript',
      description:
        'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
      image: '../assets/typescript.png',
    },
    {
      id: 4,
      name: 'Learn Angular',
      description:
        'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript.',
      image: '../assets/angular.png',
    },
  ];

  constructor(private http: HttpClient) {}

  getAllPost() {
    return this.http.get(this.baseUrl + 'posts');
  }

  postData(body: any) {
    return this.http.post(this.baseUrl, body);
  }
}
