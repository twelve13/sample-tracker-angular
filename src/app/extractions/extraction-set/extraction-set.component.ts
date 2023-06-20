import { Component, Input } from '@angular/core';

import { ExtractionSet } from './extraction-set.model';
import { ExtractionSetService } from '../extraction-set/extraction-set.service';

@Component({
  selector: 'app-extraction-set',
  templateUrl: './extraction-set.component.html',
  styleUrls: ['./extraction-set.component.css']
})
export class ExtractionSetComponent {
  @Input() extractionSet: ExtractionSet;
  @Input() index: number;

  constructor(private extractionSetService: ExtractionSetService) {}

  onEditExtraction(index: number) {
    this.extractionSetService.startedEditing.next(index);
  }
}
