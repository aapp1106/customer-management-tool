import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAgree.ComponentComponent } from './dialog-agree.component.component';

describe('DialogAgree.ComponentComponent', () => {
  let component: DialogAgree.ComponentComponent;
  let fixture: ComponentFixture<DialogAgree.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAgree.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAgree.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
