import { Component } from '@angular/core';

import { ExtractionSet } from '../extraction-set/extraction-set.model';
import { ExtractionSetService } from '../extraction-set/extraction-set.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-extraction-create',
  templateUrl: './extraction-create.component.html',
  styleUrls: ['./extraction-create.component.css']
})

export class ExtractionCreateComponent {
  constructor(private extractionSetService: ExtractionSetService) {}

  onAddItem( form: NgForm ) {
    const value = form.value;
    const newExtractionSet = new ExtractionSet(value.name, value.type, value.notes, value.analyst, false, "", false, "", []);
    this.extractionSetService.addExtractionSet(newExtractionSet);
  }
}
