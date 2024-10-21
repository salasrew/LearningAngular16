import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HiraganaComponent } from './hiragana/hiragana.component';
import { KatakanaComponent } from './katakana/katakana.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: 'hiragana', component: HiraganaComponent },
  { path: 'katakana', component: KatakanaComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '', redirectTo: '/hiragana', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

