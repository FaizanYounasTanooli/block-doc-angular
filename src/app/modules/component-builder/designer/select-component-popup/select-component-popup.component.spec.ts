import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponentPopupComponent } from './select-component-popup.component';

describe('SelectComponentPopupComponent', () => {
  let component: SelectComponentPopupComponent;
  let fixture: ComponentFixture<SelectComponentPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectComponentPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectComponentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
