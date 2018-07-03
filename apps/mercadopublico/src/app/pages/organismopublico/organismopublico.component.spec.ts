import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismopublicoComponent } from './organismopublico.component';

describe('OrganismopublicoComponent', () => {
  let component: OrganismopublicoComponent;
  let fixture: ComponentFixture<OrganismopublicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganismopublicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganismopublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
