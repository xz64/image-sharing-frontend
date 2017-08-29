import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { UserService } from '../user/user.service';
import { ImageService } from '../image/image.service';
import { DeleteRequest } from '../image/image.interface';

@Component({
  selector: 'app-my-images',
  templateUrl: './my-images.component.html',
  styleUrls: ['./my-images.component.scss']
})
export class MyImagesComponent implements OnInit, OnDestroy {
  userId: string;
  private deleteSubscription: Subscription;
  reloadCounter = 0;

  constructor(private userService: UserService, private imageService: ImageService) {
    this.userId = userService.userId;
    this.deleteSubscription = this.imageService.imageDeletes.subscribe((deleteRequest: DeleteRequest) => {
      this.imageService.deleteImage(deleteRequest)
      .then(() => {
        this.reloadCounter++;
      })
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.deleteSubscription.unsubscribe();
  }

}
