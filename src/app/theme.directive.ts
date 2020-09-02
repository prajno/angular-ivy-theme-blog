import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { availableThemes, Theme } from './theme.type';
import { ThemeService } from './theme.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { applyThemeProperties } from './theme.util';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective {
  private unsubscribe$ = new Subject();

  constructor(
    private elementRef: ElementRef,
    private themeService: ThemeService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.themeService.themeChange$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((theme: Theme) => this.updateTheme(theme));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  updateTheme(theme: Theme) {
    applyThemeProperties(this.elementRef.nativeElement, theme);
    this.changeDetectorRef.detectChanges();
  }

}