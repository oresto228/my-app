import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppElectronicsPageComponent } from './app-electronics-page.component';

describe('AppElectronicsPageComponent', () => {
  let component: AppElectronicsPageComponent;
  let fixture: ComponentFixture<AppElectronicsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppElectronicsPageComponent]
    });
    fixture = TestBed.createComponent(AppElectronicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
