import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllPostsResponse, Post } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'https://localhost:7191';
  constructor(private http: HttpClient) {}

  generateQrCodePix(request: any): Observable<Blob> {
    return this.http.post(`${this.API_URL}/donation/pix`, request, {
      responseType: 'blob',
    });
  }
  getAllPosts(): Observable<GetAllPostsResponse> {
    return this.http.get<GetAllPostsResponse>(
      `${this.API_URL}/posts/all-posts`
    );
  }

  getPostById(id: string): Observable<{ post: Post }> {
    return this.http.get<{ post: Post }>(`${this.API_URL}/posts/${id}`);
  }
}
