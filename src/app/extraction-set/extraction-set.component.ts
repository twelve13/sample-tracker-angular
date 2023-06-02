import { Component, Input } from '@angular/core';

import { ExtractionSet } from './extraction-set.model';

@Component({
  selector: 'app-extraction-set',
  templateUrl: './extraction-set.component.html',
  styleUrls: ['./extraction-set.component.css']
})
export class ExtractionSetComponent {
  @Input() extractionSet: ExtractionSet;
}
