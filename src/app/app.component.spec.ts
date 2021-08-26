import { TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { VersionComponent } from './components/version/version.component';
import { QuestionService } from './services/question.service';

describe('AppComponent', () => {
  /**
   * https://stackoverflow.com/questions/48760093/how-to-provide-mock-angularfirestore-module-inside-angular-component-for-default
   * */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatDialogModule, MatMenuModule],
      declarations: [AppComponent, VersionComponent],
      // I used 'useValue' because it is just a json. If it was class, I'd use 'useClass'
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: QuestionService, useValue: {} },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
