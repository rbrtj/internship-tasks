import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { BackupTasksComponent } from './backup-tasks/backup-tasks.component';
import { DevicesComponent } from './devices/devices.component';

const routes: Routes = [
  {path: 'settings', component: SettingsComponent},
  {path: 'backup', component: BackupTasksComponent},
  {path: 'devices', component: DevicesComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
