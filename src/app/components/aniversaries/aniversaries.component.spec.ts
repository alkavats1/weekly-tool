import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { Partner } from 'src/app/models/partner';
import { containText, findEl } from 'src/test.helpers';

import { AniversariesComponent } from './aniversaries.component';

describe('AniversariesComponent', () => {
  let component: AniversariesComponent;
  let fixture: ComponentFixture<AniversariesComponent>;
  const partner = new Partner('Alguien', new Date());
  partner.id = '123';
  const aniversaries = [partner];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AniversariesComponent],
      imports: [MatIconModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AniversariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show aniversary icon', () => {
    expect(component).toBeTruthy();
    component.aniversaries = aniversaries;

    fixture.detectChanges();

    const aniversaryIcon = findEl(fixture, '.aniversary-icon');
    expect(aniversaryIcon).toBeTruthy();
  });

  // it('should show aniversary title', () => {
  //   expect(component).toBeTruthy();
  //   component.aniversaries = aniversaries;

  //   fixture.detectChanges();

  //   const aniversaryIcon = findEl(fixture, '.aniversary-title');
  //   expect(aniversaryIcon).toBeTruthy();
  // });

  it('should show aniversary partners list', () => {
    expect(component).toBeTruthy();
    component.aniversaries = aniversaries;

    fixture.detectChanges();

    const aniversaryIcon = findEl(fixture, '.aniverary-partner-list');
    expect(aniversaryIcon).toBeTruthy();
  });

  it('should show aniversary partners items', () => {
    expect(component).toBeTruthy();
    component.aniversaries = aniversaries;

    fixture.detectChanges();

    const aniversaryIcon = findEl(fixture, '.aniverary-partner-list');
    expect(aniversaryIcon.children.length).toEqual(1);

    containText(
      fixture,
      '.aniverary-partner-list',
      'Alguien hace 0 años que está trabajando con nosotros',
    );
  });
});