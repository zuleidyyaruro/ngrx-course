import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hijo } from "./contador/hijo/hijo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hijo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'redux-app';
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
