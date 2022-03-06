import { Component } from '@angular/core';
import { APP_VERSION } from '@angular/fire/analytics';


@Component({
  selector: 'wt-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss'],
})
export class VersionComponent {
  version = APP_VERSION;
}
