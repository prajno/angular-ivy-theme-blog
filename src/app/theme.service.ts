import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { oldTheme, Theme, isSupportedTheme } from './theme.type';
import { applyThemeProperties } from './theme.util';

@Injectable()
export class ThemeService {
  private themeChange = new BehaviorSubject<Theme>(oldTheme);
  themeChange$ = this.themeChange.asObservable();

  constructor() { }

  setTheme(theme: Theme) {
    if (!isSupportedTheme(theme)) {
      throw new Error('This theme is not supported');
    }

    const htmlTag = document.getElementsByTagName('HTML')[0];
    const bodyTag = document.getElementsByTagName('BODY')[0];
    [htmlTag, bodyTag].forEach(el => applyThemeProperties(el, theme));

    this.themeChange.next(theme);
  }
}