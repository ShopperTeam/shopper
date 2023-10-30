import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  //styleUrls: ['./warning-alert.component.scss']
  styles: [`
    p {
      color: var(--pale-purple);
      background-color: var(--teal);
      margin: 20px;
      border: 1px;
      padding: 20px;
    }

  `]
})

export class WarningAlertComponent {

}
