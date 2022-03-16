import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  courses = [
    {
      id: 1,
      name: 'Learn JavaScript',
      description:
        'JavaScript is among the most powerful and flexible programming languages of the web. It’s one of the core technologies of web development and can be used on both the front-end and the back-end.',
      image: '../assets/javascript.png',
      video: 'https://www.youtube.com/watch?v=yumiwKKhlVs',
    },
    {
      id: 2,
      name: 'Learn React',
      description:
        'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.',
      image: '../assets/react.png',
      video: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
    },
    {
      id: 3,
      name: 'Learn TypeScript',
      description:
        'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
      image: '../assets/typescript.png',
      video: 'https://www.youtube.com/watch?v=BwuLxPH8IDs',
    },
    {
      id: 4,
      name: 'Learn Angular',
      description:
        'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript.',
      image: '../assets/angular.png',
      video: 'https://www.youtube.com/watch?v=k5E2AVpwsko',
    },
  ];
}
