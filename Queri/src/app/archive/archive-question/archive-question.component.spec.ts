import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveQuestionComponent } from './archive-question.component';

describe('ArchiveQuestionComponent', () => {
  let component: ArchiveQuestionComponent;
  let fixture: ComponentFixture<ArchiveQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
