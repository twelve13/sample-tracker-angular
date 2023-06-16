import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SamplesComponent } from './samples/samples.component';
import { ExtractionsComponent } from './extractions/extractions.component';
import { ExtractionSetDetailsComponent } from './extractions/extraction-set-details/extraction-set-details.component';
import { ExtractionEditComponent } from './extractions/extraction-edit/extraction-edit.component';
import { ArchiveListComponent } from './archive-list/archive-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/samples', pathMatch: "full" },
  { path: 'samples', component: SamplesComponent },
  { path: 'extractions', component: ExtractionsComponent},
  { path: 'archive', component: ArchiveListComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
