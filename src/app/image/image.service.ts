import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { UserService } from '../user/user.service';
import { ImageDTO } from './image.interface';

@Injectable()
class ImageService {
  constructor (private http: Http, private userService: UserService) { }

  getUserImages(userId: string): Promise<Array<ImageDTO>> {
    return this.http.get(`/api/images/user/${encodeURIComponent(userId)}`)
    .map((res: Response) => res.json())
    .toPromise();
  }

}

export { ImageService };
