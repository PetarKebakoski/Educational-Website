import { Component, OnInit } from '@angular/core';
import { JoinNowService } from '../join-now.service';

@Component({
  selector: 'app-join-now',
  templateUrl: './join-now.component.html',
  styleUrls: ['./join-now.component.css'],
})
export class JoinNowComponent implements OnInit {
  selectedCourse = 'Open this select menu';

  selectedCourses: any[] = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'React' },
    { id: 3, name: 'TypeScript' },
    { id: 4, name: 'Angular' },
  ];

  constructor(private postData: JoinNowService) {}

  postdata(form: Object) {
    this.postData.postData(form).subscribe(
      (data) => {
        console.log('dataPost', data);
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  onSubmit(formValue: any) {
    console.log('formValue', formValue);

    this.postdata(formValue);
  }

  ngOnInit(): void {}
}
