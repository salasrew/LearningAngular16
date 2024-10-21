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
  questionCount: number = 10; // 默認題目數量
  totalQuestions: number = 0; // 總題目數量
  currentQuestionIndex: number = 0; // 當前題目索引

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
  };

  selectedPrefixes: string[] = []; // 用戶選擇的字首
  includeDakuon: boolean = false; // 是否包含濁音
  includeHanDakuon: boolean = false; // 是否包含半濁音
  includeSeion: boolean = true; // 是否包含清音

  constructor() {
    // 初始化時獲取隨機假名
    this.getRandomCharacter();
  }

  setMode(selectedMode: string) {
    this.mode = selectedMode;
    this.currentQuestionIndex = 0; // 重置題目索引
    this.score = 0; // 重置分數
  }

  startQuiz() {
    this.totalQuestions = this.questionCount; // 設定總題目數量
    this.currentQuestionIndex = 0; // 重置題目索引
    this.score = 0; // 重置分數
    this.getRandomCharacter(); // 獲取第一個題目
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
    this.currentQuestionIndex++; // 移動到下一題

    // 檢查是否還有題目
    if (this.currentQuestionIndex < this.totalQuestions) {
      this.getRandomCharacter(); // 獲取下一個題目
    } else {
      this.endQuiz(); // 結束測驗
    }
  }

  endQuiz() {
    this.resultMessage = `測驗結束！總分: ${this.score}/${this.totalQuestions}`; // 顯示總分
    this.isCorrect = false; // 重置正確狀態
    this.currentCharacter = ''; // 清空當前字符
  }

  // 獲取隨機的假名及其正確答案
  getRandomCharacter() {
    const filteredCharacters = Object.keys(this.kanaMap).filter(character => {
      const isSeion = this.includeSeion && !['が', 'ざ', 'だ', 'ば', 'ぱ', 'きゃ', 'きゅ', 'きょ', 'しゃ', 'しゅ', 'しょ', 'ちゃ', 'ちゅ', 'ちょ', 'にゃ', 'にゅ', 'にょ', 'ひゃ', 'ひゅ', 'ひょ', 'みゃ', 'みゅ', 'みょ', 'りゃ', 'りゅ', 'りょ'].includes(character);
      const isDakuon = this.includeDakuon && ['が', 'ざ', 'だ', 'ば', 'ぱ', 'きゃ', 'きゅ', 'きょ', 'しゃ', 'しゅ', 'しょ', 'ちゃ', 'ちゅ', 'ちょ', 'にゃ', 'にゅ', 'にょ', 'ひゃ', 'ひゅ', 'ひょ', 'みゃ', 'みゅ', 'みょ', 'りゃ', 'りゅ', 'りょ'].includes(character);
      const isHanDakuon = this.includeHanDakuon && ['ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'].includes(character);
      const startsWithSelectedPrefix = this.selectedPrefixes.length === 0 || this.selectedPrefixes.some(prefix => character.startsWith(prefix));
      
      return (isSeion || isDakuon || isHanDakuon) && startsWithSelectedPrefix;
    });

    if (filteredCharacters.length > 0) {
      this.currentCharacter = filteredCharacters[Math.floor(Math.random() * filteredCharacters.length)];
      this.correctAnswer = this.kanaMap[this.currentCharacter]; // 獲取正確答案
    } else {
      this.currentCharacter = ''; // 若無字符可選，則設為空
      this.correctAnswer = ''; // 對應的答案設為空
    }
  }
}
