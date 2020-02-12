import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Bakhtiyar';
  items = [
    {
      description: "Sport", action: "Yes"
    },
    {
      description: "Breakfast", action: "Yes"
    },
    {
      description: "Learn Angular", action: "No"
    }
  ]
}
