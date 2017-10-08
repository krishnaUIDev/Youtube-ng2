import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuryaListComponent } from './surya-list.component';

describe('SuryaListComponent', () => {
  let component: SuryaListComponent;
  let fixture: ComponentFixture<SuryaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuryaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuryaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
