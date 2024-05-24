import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolexImageComponent } from './folex-image.component';

describe('FolexImageComponent', () => {
  let component: FolexImageComponent;
  let fixture: ComponentFixture<FolexImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FolexImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FolexImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
