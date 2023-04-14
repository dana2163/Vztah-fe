import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerentsChildrenClassesComponent } from './perents-children-classes.component';

describe('PerentsChildrenClassesComponent', () => {
  let component: PerentsChildrenClassesComponent;
  let fixture: ComponentFixture<PerentsChildrenClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerentsChildrenClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerentsChildrenClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
