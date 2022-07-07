import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { BackupTasksComponent } from './backup-tasks/backup-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    BackupTasksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
