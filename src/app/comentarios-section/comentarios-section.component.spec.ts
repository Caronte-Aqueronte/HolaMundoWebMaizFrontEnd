import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosSectionComponent } from './comentarios-section.component';

describe('ComentariosSectionComponent', () => {
  let component: ComentariosSectionComponent;
  let fixture: ComponentFixture<ComentariosSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentariosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
