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

  onMarkBufferAdded() {
    const date = new Date();
    const bufferAddedDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
    const bufferAddedExtractionSet = new ExtractionSet(this.extractionSet.name, this.extractionSet.type, this.extractionSet.analyst, this.extractionSet.notes, true, bufferAddedDate, this.extractionSet.wasExtracted, "", this.extractionSet.samples);
    this.extractionSetService.updateExtractionSet(this.index, bufferAddedExtractionSet);
  }

  onMarkExtracted() {
    const date = new Date();
    const extractedDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
    const extractionExtracted = new ExtractionSet(this.extractionSet.name, this.extractionSet.type, this.extractionSet.analyst, this.extractionSet.notes, true, this.extractionSet.bufferAddedDate, true, extractedDate, this.extractionSet.samples);
    this.extractionSetService.updateExtractionSet(this.index, extractionExtracted);
  }
}
