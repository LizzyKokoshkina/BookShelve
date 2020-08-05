import { Injectable } from '@angular/core';
import { Book } from '../Models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable()
export class BookService {
  baseUrl: string = `${environment.apiUrl}/book`;

  constructor(private http: HttpClient) {  }

  get(): Observable<Object> {
    return this.http.get(this.baseUrl);
  }

  post(postBody: Book) {
    return this.http.post(this.baseUrl, postBody);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}?id=${id}`);
  }

}

