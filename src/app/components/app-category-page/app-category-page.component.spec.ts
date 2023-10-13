import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCategoryPageComponent } from './app-category-page.component';

describe('AppElectronicsPageComponent', () => {
  let component: AppCategoryPageComponent;
  let fixture: ComponentFixture<AppCategoryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCategoryPageComponent]
    });
    fixture = TestBed.createComponent(AppCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
