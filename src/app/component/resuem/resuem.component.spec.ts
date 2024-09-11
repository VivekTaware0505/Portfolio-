import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuemComponent } from './resuem.component';

describe('ResuemComponent', () => {
  let component: ResuemComponent;
  let fixture: ComponentFixture<ResuemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResuemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResuemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
