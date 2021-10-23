import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({
    id: '',
    text: '',
    date: null,
  });
  selectedLog = this.logSource.asObservable();

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

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);
  }

  updateLog(log: Log) {
    this.logs.forEach((curr, index) => {
      if (curr.id === log.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
  }

  removeLog(log: Log) {
    this.logs.forEach((curr, index) => {
      if (curr.id === log.id) {
        this.logs.splice(index, 1);
      }
    });
  }
}
