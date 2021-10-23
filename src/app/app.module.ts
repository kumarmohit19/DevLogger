import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LogService } from './services/log.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogFormComponent } from './components/log-form/log-form.component';
import { LogsComponent } from './components/logs/logs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogFormComponent,
    LogsComponent,
  ],
  imports: [BrowserModule],
  providers: [LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
