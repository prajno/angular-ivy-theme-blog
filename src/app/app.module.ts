import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ThemeService } from './theme.service';
import { ThemeDirective } from './theme.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ThemeDirective ],
  bootstrap:    [ AppComponent ],
  providers: [ThemeService]
})
export class AppModule { }
