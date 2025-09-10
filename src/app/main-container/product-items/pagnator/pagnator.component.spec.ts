import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagnatorComponent } from './pagnator.component';

describe('PagnatorComponent', () => {
  let component: PagnatorComponent;
  let fixture: ComponentFixture<PagnatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagnatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagnatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
