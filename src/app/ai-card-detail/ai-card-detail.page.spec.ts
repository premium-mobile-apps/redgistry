import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AICardDetailPage } from './ai-card-detail.page';

describe('AICardDetailPage', () => {
  let component: AICardDetailPage;
  let fixture: ComponentFixture<AICardDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AICardDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
