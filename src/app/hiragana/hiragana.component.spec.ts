import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiraganaComponent } from './hiragana.component';

describe('HiraganaComponent', () => {
  let component: HiraganaComponent;
  let fixture: ComponentFixture<HiraganaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiraganaComponent]
    });
    fixture = TestBed.createComponent(HiraganaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
