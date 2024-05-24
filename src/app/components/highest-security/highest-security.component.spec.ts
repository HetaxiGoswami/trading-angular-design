import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestSecurityComponent } from './highest-security.component';

describe('HighestSecurityComponent', () => {
  let component: HighestSecurityComponent;
  let fixture: ComponentFixture<HighestSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighestSecurityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighestSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
