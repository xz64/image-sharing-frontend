import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ImageService } from '../image/image.service';
import { AddRequest } from '../image/image.interface';

@Component({
  selector: 'app-add-image-form',
  templateUrl: './add-image-form.component.html',
  styleUrls: ['./add-image-form.component.scss']
})
export class AddImageFormComponent implements OnInit, OnDestroy {
  @ViewChild('addForm') form: NgForm;
  private addSubscription: Subscription
  showSuccess = false;
  showError = false;

  constructor(private imageService: ImageService) {
    this.addSubscription = imageService.imageAdds.subscribe(addReq => {
      this.showSuccess = false;
      this.showError = false;
      this.imageService.addImage(addReq)
      .then(() => {
        this.form.resetForm();
        this.showSuccess = true;
        setTimeout(() => {
          this.showSuccess = false;
        }, 1000);
      })
      .catch(() => {
        this.showError = true;
      });
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.addSubscription.unsubscribe();
  }

  onSubmit() {
    if (this.form.valid) {
      const addReq: AddRequest = {
        url: this.form.value.url,
        caption: this.form.value.caption
      };
      this.imageService.imageAdds.next(addReq);
    }
  }

}
