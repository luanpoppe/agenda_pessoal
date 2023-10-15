import { Injectable } from '@angular/core';
import { HttpCliente } from '@angular';

@Injectable({
  providedIn: 'root',
})
export class CalendarApiService {
  constructor(private http: HttpCliente) {}
}
