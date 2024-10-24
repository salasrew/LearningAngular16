import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HiraganaComponent } from './hiragana/hiragana.component';
import { KatakanaComponent } from './katakana/katakana.component';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    HiraganaComponent,
    KatakanaComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
