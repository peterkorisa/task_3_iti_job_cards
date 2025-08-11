import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cards } from './cards/cards';
import { SearchBar } from './search-bar/search-bar';
@Component({
  selector: 'app-root',
  imports: [ Cards ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task3cards');
}
