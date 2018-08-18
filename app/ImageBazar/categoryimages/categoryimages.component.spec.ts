import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryimagesComponent } from './categoryimages.component';

describe('CategoryimagesComponent', () => {
  let component: CategoryimagesComponent;
  let fixture: ComponentFixture<CategoryimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
