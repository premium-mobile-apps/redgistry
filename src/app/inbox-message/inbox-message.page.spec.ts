import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InboxMessagePage } from './inbox-message.page';

describe('InboxMessagePage', () => {
  let component: InboxMessagePage;
  let fixture: ComponentFixture<InboxMessagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
