import { Component, Input, OnInit } from '@angular/core';

import { ImageDTO } from '../image.interface';

@Component({
  selector: 'app-image-tile-grid',
  templateUrl: './image-tile-grid.component.html',
  styleUrls: ['./image-tile-grid.component.scss']
})
export class ImageTileGridComponent implements OnInit {
  @Input() images: Array<ImageDTO>;

  constructor() { }

  ngOnInit() {
  }

}
