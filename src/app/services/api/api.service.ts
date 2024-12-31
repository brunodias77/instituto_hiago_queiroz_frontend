import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'https://localhost:7191/Donation/pix';
  constructor(private http: HttpClient) {}
  generateQrCodePix(request: any): Observable<Blob> {
    return this.http.post(this.API_URL, request, { responseType: 'blob' });
  }
}
