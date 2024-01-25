import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EaccessPage } from './eaccess.page';

describe('EaccessPage', () => {
  let component: EaccessPage;
  let fixture: ComponentFixture<EaccessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EaccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
