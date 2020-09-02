import { Component, VERSION } from '@angular/core';
import { ThemeService } from './theme.service';
import { availableThemes, Theme } from './theme.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  currentTheme$: Observable<Theme>;

  constructor(private themeService: ThemeService){
    this.currentTheme$ = themeService.themeChange$;
  }

  selectTheme(themeName){
    this.themeService.setTheme(availableThemes.find(theme => theme.name === themeName));
  }
}
