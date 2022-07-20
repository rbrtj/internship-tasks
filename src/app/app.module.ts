import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { BackupTasksComponent } from './backup-tasks/backup-tasks.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { CapacityPipe } from 'src/capacity.pipe';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatList, MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DevicesComponent } from './devices/devices.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import {MatMenuModule} from '@angular/material/menu';
import { DialogNotificationsComponent } from './dialog-notifications/dialog-notifications.component';
import {MatRadioModule} from '@angular/material/radio';
import { AdminComponent } from './admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    BackupTasksComponent,
    MenuComponent,
    CapacityPipe,
    SidenavComponent,
    ToolbarComponent,
    DevicesComponent,
    DialogConfirmComponent,
    DialogNotificationsComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false, passThruUnknownUrl: true}),
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }
    ),
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatMenuModule,
    MatRadioModule
  ],
  providers: [CapacityPipe],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}