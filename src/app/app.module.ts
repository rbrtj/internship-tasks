import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { BackupTasksComponent } from './backup-tasks/backup-tasks.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { CapacityPipe } from 'src/capacity.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    BackupTasksComponent,
    MenuComponent,
    CapacityPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CapacityPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
