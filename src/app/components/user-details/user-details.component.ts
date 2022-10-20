import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  userId = 0;
  constructor(myactivate: ActivatedRoute) {
    this.userId = myactivate.snapshot.params['id'];
  }

  ngOnInit(): void {}
}
