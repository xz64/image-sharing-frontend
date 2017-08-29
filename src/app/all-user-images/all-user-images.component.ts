import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image/image.service';
import { ImageDTO } from '../image/image.interface';

@Component({
  selector: 'app-all-user-images',
  templateUrl: './all-user-images.component.html',
  styleUrls: ['./all-user-images.component.scss']
})
export class AllUserImagesComponent implements OnInit {
  images: Array<ImageDTO>;
  constructor(private imageService: ImageService) {
    this.imageService.getAllImages().then((images) => {
      this.images = images;
    });
  }

  ngOnInit() {
  }

}
