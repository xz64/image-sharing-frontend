import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { ImageService } from '../image/image.service';
import { ImageDTO, DeleteRequest } from '../image/image.interface';

@Component({
  selector: 'app-user-images',
  templateUrl: './user-images.component.html',
  styleUrls: ['./user-images.component.scss']
})
export class UserImagesComponent implements OnChanges {
  @Input() userId: string;
  @Input() editable: boolean;
  @Input() reloadCounter = 0;

  images: Array<ImageDTO>;

  constructor(private imageService: ImageService) {
  }

  ngOnChanges() {
    if (this.userId) {
      this.imageService.getUserImages(this.userId)
      .then(images => {
        this.images = images;
      });
    }
  }

}
