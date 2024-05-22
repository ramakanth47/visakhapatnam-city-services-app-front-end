import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsNameComponent } from './forms-name.component';

describe('FormsNameComponent', () => {
  let component: FormsNameComponent;
  let fixture: ComponentFixture<FormsNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
