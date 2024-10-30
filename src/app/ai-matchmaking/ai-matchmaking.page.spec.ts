import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AiMatchmakingPage } from './ai-matchmaking.page';

describe('AiMatchmakingPage', () => {
  let component: AiMatchmakingPage;
  let fixture: ComponentFixture<AiMatchmakingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AiMatchmakingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
