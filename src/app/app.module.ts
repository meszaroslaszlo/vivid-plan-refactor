import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EngineModule } from './engine/engine.module';
import { FieldModule } from './field/field.module';
import { NavigationModule } from './navigation/navigation.module';
import { PanelModule } from './panel/panel.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EngineModule,
    SharedModule,
    FieldModule,
    NavigationModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
