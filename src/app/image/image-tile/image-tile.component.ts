import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ImageDTO } from '../image.interface';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image-tile',
  templateUrl: './image-tile.component.html',
  styleUrls: ['./image-tile.component.scss']
})
export class ImageTileComponent implements OnInit {
  @Input() image: ImageDTO;
  @Input() editable: boolean;
  placeholder = 'http://placehold.it/200x200';

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  delete() {
    this.imageService.imageDeletes.next({
      id: this.image.id
    });
  }


}
