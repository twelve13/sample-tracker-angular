import { Component } from '@angular/core';

import { SampleService } from './sample/sample.service';
import { ExtractionSetService } from './extraction-set/extraction-set.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SampleService, ExtractionSetService]
})
export class AppComponent {
  title = 'sample-tracker-angular';
}
