import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  constructor(private changeDetector: ChangeDetectorRef) {
  }



  @Input() data: Observable<any>;
  words: string[] = [];

  ngOnInit(): void {
    this.data.subscribe(data => {
      this.words = [...this.words, ...data];
      this.changeDetector.markForCheck();
    }
    );
  }

  update() {
    this.changeDetector.detectChanges();
  }

}
