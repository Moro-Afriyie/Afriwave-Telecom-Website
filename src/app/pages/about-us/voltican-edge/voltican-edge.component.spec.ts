import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolticanEdgeComponent } from './voltican-edge.component';

describe('VolticanEdgeComponent', () => {
  let component: VolticanEdgeComponent;
  let fixture: ComponentFixture<VolticanEdgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolticanEdgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolticanEdgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
