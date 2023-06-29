import { Component } from '@angular/core';

import { SampleService } from './samples/sample/sample.service';
import { ExtractionSetService } from './extractions/extraction-set/extraction-set.service';
import { ArchiveService } from './archive/archive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SampleService, ExtractionSetService, ArchiveService]
})
export class AppComponent {
  title = 'sample-tracker-angular';
}
