import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './views/home/home.component';
import { AppRoutingModule } from './routing.module';
import { NgTemplateNameDirective } from './directives/ng-template-name.directive';
// import { FormComponent } from './components/form/form.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialModule, AppRoutingModule],
  declarations: [
    NgTemplateNameDirective,
    AppComponent,
    LayoutComponent,
    HomeComponent,
    // FormComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
