import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'changeDetectionDemo';
  wordArray: string[] = ['Siemens', 'Festo', 'Wolkswagen'];

  words = new BehaviorSubject(this.wordArray);

  addWord(word: any) {
    this.words.next([word]);
    // console.log(word);
    // let array = [word];
    // this.words.next(array);
    // this.words.next()
    console.log(word);
    console.log(this.words);
  }
}
