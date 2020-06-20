import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameWatcherComponent } from './username-watcher.component';

describe('UsernameWatcherComponent', () => {
  let component: UsernameWatcherComponent;
  let fixture: ComponentFixture<UsernameWatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameWatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameWatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
