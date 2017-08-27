import { Component, OnInit } from '@angular/core';

import { UserService } from '../user/user.service';

@Component({
  selector: 'app-my-images',
  templateUrl: './my-images.component.html',
  styleUrls: ['./my-images.component.scss']
})
export class MyImagesComponent implements OnInit {
  private userId: string;

  constructor(private userService: UserService) {
    this.userId = userService.userId;
  }

  ngOnInit() {
  }

}
