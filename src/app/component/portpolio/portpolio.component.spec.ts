import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortpolioComponent } from './portpolio.component';

describe('PortpolioComponent', () => {
  let component: PortpolioComponent;
  let fixture: ComponentFixture<PortpolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortpolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortpolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
