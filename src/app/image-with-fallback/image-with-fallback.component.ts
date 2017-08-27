import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-image-with-fallback',
  templateUrl: './image-with-fallback.component.html',
  styleUrls: ['./image-with-fallback.component.scss']
})
export class ImageWithFallbackComponent implements OnInit {
  @Input() url: string;

  constructor(private el: ElementRef) {
    this.el.nativeElement.onerror = () => {
      this.el.nativeElement.src = 'https://placehold.it/350x350';
    };
  }

  ngOnInit() {
  }

}
