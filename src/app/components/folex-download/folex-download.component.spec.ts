import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolexDownloadComponent } from './folex-download.component';

describe('FolexDownloadComponent', () => {
  let component: FolexDownloadComponent;
  let fixture: ComponentFixture<FolexDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FolexDownloadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FolexDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
