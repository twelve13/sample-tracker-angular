import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SampleComponent } from './sample/sample.component';
import { SamplingListComponent } from './sampling-list/sampling-list.component';
import { ExtractionsListComponent } from './extractions-list/extractions-list.component';
import { ExtractionSetComponent } from './extraction-set/extraction-set.component';
import { ArchiveListComponent } from './archive-list/archive-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SampleComponent,
    SamplingListComponent,
    ExtractionsListComponent,
    ExtractionSetComponent,
    ArchiveListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
