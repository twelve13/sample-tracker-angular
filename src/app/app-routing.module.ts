import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SamplingListComponent } from './sampling-list/sampling-list.component';
import { ExtractionsListComponent } from './extractions-list/extractions-list.component';
import { ArchiveListComponent } from './archive-list/archive-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/samples', pathMatch: "full" },
  { path: 'samples', component: SamplingListComponent },
  { path: 'extractions', component: ExtractionsListComponent },
  { path: 'archive', component: ArchiveListComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
