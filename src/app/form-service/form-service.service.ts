// src/app/services/form-data.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  constructor(private http: HttpClient) {}
  getFormMetadata(): Observable<any> {
    return this.http.get('/assets/form-meta.json');
  }

}
