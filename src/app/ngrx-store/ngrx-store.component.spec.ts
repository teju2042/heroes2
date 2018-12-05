import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxStoreComponent } from './ngrx-store.component';

describe('NgrxStoreComponent', () => {
  let component: NgrxStoreComponent;
  let fixture: ComponentFixture<NgrxStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
