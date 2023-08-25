import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceRoutingComponent } from './voice-routing.component';

describe('VoiceRoutingComponent', () => {
  let component: VoiceRoutingComponent;
  let fixture: ComponentFixture<VoiceRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
