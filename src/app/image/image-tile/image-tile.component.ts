import { Component, OnInit, Input } from '@angular/core';

import { ImageDTO } from '../image.interface';

@Component({
  selector: 'app-image-tile',
  templateUrl: './image-tile.component.html',
  styleUrls: ['./image-tile.component.scss']
})
export class ImageTileComponent implements OnInit {
  @Input() private image: ImageDTO;

  constructor() { }

  ngOnInit() {
  }

}
