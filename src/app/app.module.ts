import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SampleComponent } from './samples/sample/sample.component';
import { SamplingListComponent } from './samples/sampling-list/sampling-list.component';
import { ExtractionsListComponent } from './extractions/extractions-list/extractions-list.component';
import { ExtractionSetComponent } from './extractions/extraction-set/extraction-set.component';
import { ArchiveListComponent } from './archive-list/archive-list.component';
import { ExtractionsStartComponent } from './extractions/extractions-start/extractions-start.component';
import { ExtractionsComponent } from './extractions/extractions.component';
import { ExtractionSetDetailsComponent } from './extractions/extraction-set-details/extraction-set-details.component';
import { ExtractionEditComponent } from './extractions/extraction-edit/extraction-edit.component';
import { SampleCreateComponent } from './samples/sample-create/sample-create.component';

import { FormsModule } from '@angular/forms';
import { SamplesComponent } from './samples/samples.component';
import { SampleEditFormComponent } from './samples/sample-edit-form/sample-edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SampleComponent,
    SamplingListComponent,
    ExtractionsListComponent,
    ExtractionSetComponent,
    ArchiveListComponent,
    ExtractionsStartComponent,
    ExtractionsComponent,
    ExtractionSetDetailsComponent,
    ExtractionEditComponent,
    SampleCreateComponent,
    SamplesComponent,
    SampleEditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
