import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Generated Component',
        date: new Date('12/26/2018 12:54:23'),
      },
      {
        id: '2',
        text: 'Added Bootstrap',
        date: new Date('12/27/2018 02:40:23'),
      },
      {
        id: '3',
        text: 'Added logs Component',
        date: new Date('12/28/2018 12:54:23'),
      },
    ];
  }

  getLogs(): Log[] {
    return this.logs;
  }
}
