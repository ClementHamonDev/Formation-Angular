import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDisplayComponentComponent } from './stock-display-component.component';

describe('StockDisplayComponentComponent', () => {
  let component: StockDisplayComponentComponent;
  let fixture: ComponentFixture<StockDisplayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockDisplayComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockDisplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
