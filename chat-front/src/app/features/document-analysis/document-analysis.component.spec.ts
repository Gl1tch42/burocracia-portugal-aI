import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentAnalysisComponent } from './document-analysis.component';

describe('DocumentAnalysisComponent', () => {
  let component: DocumentAnalysisComponent;
  let fixture: ComponentFixture<DocumentAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
