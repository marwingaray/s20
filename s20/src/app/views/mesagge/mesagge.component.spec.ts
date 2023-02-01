import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaggeComponent } from './mesagge.component';

describe('MesaggeComponent', () => {
  let component: MesaggeComponent;
  let fixture: ComponentFixture<MesaggeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesaggeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesaggeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
