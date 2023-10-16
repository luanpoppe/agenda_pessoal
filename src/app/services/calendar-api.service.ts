import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CalendarApiService {
  calendarId: string = 'seila191@gmail.com';

  constructor(private http: HttpClient) {}

  getCalendarEvents() {
    return this.http.get(
      `https://www.googleapis.com/calendar/v3/calendars/${this.calendarId}/events`
    );
  }
}
