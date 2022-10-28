import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: ` <div>
    <h2>Alert!</h2>
    <p>This is an alert</p>
  </div>`,
  styles: [
    `
      div {
        margin-top: 2rem;
        padding: 20px;
        background-color: orange;
        border: 5px solid red;
      }
    `,
  ],
})
export class AlertComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
