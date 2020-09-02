import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { oldTheme, Theme, isSupportedTheme } from './theme.type';

@Injectable()
export class ThemeService {
  private themeChange = new BehaviorSubject<Theme>(oldTheme);
  themeChange$ = this.themeChange.asObservable();

  constructor() { }

  setTheme(theme: Theme) {
    if (!isSupportedTheme(theme)) {
      throw new Error('This theme is not supported');
    }

    this.themeChange.next(theme);
  }
}