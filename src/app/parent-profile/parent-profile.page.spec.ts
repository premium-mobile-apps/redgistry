import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentProfilePage } from './parent-profile.page';

describe('ParentProfilePage', () => {
  let component: ParentProfilePage;
  let fixture: ComponentFixture<ParentProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
