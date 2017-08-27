import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import { UserService } from '../user/user.service';
import { ImageDTO, AddRequest, DeleteRequest } from './image.interface';

@Injectable()
class ImageService {
  imageAdds: Subject<AddRequest> = new Subject();
  imageDeletes: Subject<DeleteRequest> = new Subject();

  constructor(private http: Http, private userService: UserService) { }

  getUserImages(userId: string): Promise<Array<ImageDTO>> {
    return this.http.get(`/api/images/user/${encodeURIComponent(userId)}`)
    .map((res: Response) => res.json())
    .toPromise();
  }

  getAllImages(): Promise<Array<ImageDTO>> {
    return this.http.get('/api/images/all')
    .map((res: Response) => res.json())
    .toPromise();
  }

  deleteImage(deleteRequest: DeleteRequest) {
    const headers = new Headers();
    headers.append('xsrf-token', this.userService.csrfToken);
    return this.http.post('/api/images/delete', deleteRequest, { headers })
    .toPromise();
  }
}

export { ImageService };
