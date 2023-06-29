import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SamplesComponent } from './samples/samples.component';
import { SamplingListComponent } from './samples/sampling-list/sampling-list.component';
import { SampleComponent } from './samples/sample/sample.component';
import { SampleCreateComponent } from './samples/sample-create/sample-create.component';
import { SampleEditFormComponent } from './samples/sample-edit-form/sample-edit-form.component';
import { ExtractionsComponent } from './extractions/extractions.component';
import { ExtractionsListComponent } from './extractions/extractions-list/extractions-list.component';
import { ExtractionSetComponent } from './extractions/extraction-set/extraction-set.component';
import { ExtractionCreateComponent } from './extractions/extraction-create/extraction-create.component';
import { ExtractionEditFormComponent } from './extractions/extraction-edit-form/extraction-edit-form.component';
import { ArchiveListComponent } from './archive/archive-list/archive-list.component';
import { ArchiveSampleComponent } from './archive/archive-sample/archive-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SampleComponent,
    SamplingListComponent,
    ExtractionsListComponent,
    ExtractionSetComponent,
    ArchiveListComponent,
    ExtractionsComponent,
    SampleCreateComponent,
    SamplesComponent,
    SampleEditFormComponent,
    ExtractionCreateComponent,
    ExtractionEditFormComponent,
    ArchiveSampleComponent
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
