import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  mode: string = 'recognition'; // 默認為辨識模式
  userInput: string = ''; // 用戶輸入的羅馬拼音
  currentCharacter: string = ''; // 隨機出現的平假名
  correctAnswer: string = ''; // 正確答案
  score: number = 0; // 分數
  resultMessage: string = ''; // 用於顯示正確或錯誤的消息
  isCorrect: boolean = false; // 判斷用戶答案是否正確

  // 假名及其對應的羅馬拼音
  kanaMap: { [key: string]: string } = {
    'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
    'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
    'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
    'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
    'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
    'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
    'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
    'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
    'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
    'わ': 'wa', 'を': 'wo', 'ん': 'n',
    // 擴展音
    'きゃ': 'kya', 'きゅ': 'kyu', 'きょ': 'kyo',
    'しゃ': 'sha', 'しゅ': 'shu', 'しょ': 'sho',
    'ちゃ': 'cha', 'ちゅ': 'chu', 'ちょ': 'cho',
    'にゃ': 'nya', 'にゅ': 'nyu', 'にょ': 'nyo',
    'ひゃ': 'hya', 'ひゅ': 'hyu', 'ひょ': 'hyo',
    'みゃ': 'mya', 'みゅ': 'myu', 'みょ': 'myo',
    'りゃ': 'rya', 'りゅ': 'ryu', 'りょ': 'ryo',
    // 添加更多的擴展音（如有需要）
  };

  constructor() {
    this.getRandomCharacter(); // 初始化時獲取隨機假名
  }

  setMode(selectedMode: string) {
    this.mode = selectedMode;
    this.getRandomCharacter(); // 切換模式時隨機獲取假名
  }

  submitAnswer() {
    if (this.userInput.toLowerCase() === this.correctAnswer) {
      this.resultMessage = '正確！';
      this.isCorrect = true;
      this.score++; // 增加分數
    } else {
      this.resultMessage = '錯誤！';
      this.isCorrect = false;
    }
    this.userInput = ''; // 重置用戶輸入
    this.getRandomCharacter(); // 獲取新的假名
  }

  // 獲取隨機的假名及其正確答案
  getRandomCharacter() {
    const characters = Object.keys(this.kanaMap);
    this.currentCharacter = characters[Math.floor(Math.random() * characters.length)];
    this.correctAnswer = this.kanaMap[this.currentCharacter]; // 獲取正確答案
  }
}
