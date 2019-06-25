import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ClarityModule,
  ClrEmphasisModule,
  ClrDataModule,
  ClrIconModule,
  ClrModalModule,
  ClrLoadingModule,
  // ClrConditionalModule,
  // ClrFocusTrapModule,
  ClrButtonModule,
  ClrFormsModule,
  ClrLayoutModule,
  ClrPopoverModule,
  ClrWizardModule,
  ClrDragAndDropModule,
  // ClrStepperModule
} from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ClarityModule,
    // ClrEmphasisModule,
    // ClrDataModule,
    // ClrIconModule,
    // ClrModalModule,
    // ClrLoadingModule,
    // ClrConditionalModule,
    // ClrFocusTrapModule,
    // ClrButtonModule,
    // ClrFormsModule,
    // ClrLayoutModule,
    // ClrPopoverModule,
    // ClrWizardModule,
    // ClrDragAndDropModule,
    // ClrStepperModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
