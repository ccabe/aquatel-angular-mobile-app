import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralItemComponent } from './central-item.component';

describe('CentralItemComponent', () => {
  let component: CentralItemComponent;
  let fixture: ComponentFixture<CentralItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
