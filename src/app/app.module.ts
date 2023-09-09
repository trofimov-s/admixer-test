import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from '@modules/navigation';
import { CoreModule } from '@core';
import { SidebarModule } from '@shared/sidebar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavigationModule,
    HttpClientModule,
    CoreModule,
    SidebarModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
