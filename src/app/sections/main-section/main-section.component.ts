import { Component, OnInit } from '@angular/core';
import { CalendarApiService } from 'src/app/services/calendar-api.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
})
export class MainSectionComponent implements OnInit {
  constructor(private calendarApiService: CalendarApiService) {}

  ngOnInit(): void {}

  getCalendarEvents() {
    this.calendarApiService
      .getCalendarEvents()
      .subscribe((data) => console.log(data));
  }
}
