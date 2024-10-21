import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  mode: string = 'recognition'; // 默認為辨識模式

  setMode(selectedMode: string) {
    this.mode = selectedMode;
  }
}
