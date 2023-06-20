import { Component, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

import { ExtractionSet } from '../extraction-set/extraction-set.model';
import { ExtractionSetService } from '../extraction-set/extraction-set.service';


@Component({
  selector: 'app-extraction-edit-form',
  templateUrl: './extraction-edit-form.component.html',
  styleUrls: ['./extraction-edit-form.component.css']
})

export class ExtractionEditFormComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) extractionForm: NgForm;
  subscription: Subscription;
  editedExtractionIndex: number;
  editedExtraction: ExtractionSet;
  showForm = false;

  @Input() extractionSet: ExtractionSet;
  @Input() index: number;

  constructor(private extractionSetService: ExtractionSetService) {}

  ngOnInit() {
    this.subscription = this.extractionSetService.startedEditing
    .subscribe(
      (index: number) => {
        this.showForm = true;
        this.editedExtractionIndex = index;
        this.editedExtraction = this.extractionSetService.getExtractionSet(index);
        // console.log(this.editedExtraction)
        this.extractionForm.setValue({
          name: this.editedExtraction.name,
          type:this.editedExtraction.type,
          analyst: this.editedExtraction.analyst,
          notes: this.editedExtraction.notes,
          bufferAdded: this.editedExtraction.bufferAdded,
          bufferAddedDate: this.editedExtraction.bufferAddedDate,
          wasExtracted: this.editedExtraction.wasExtracted,
          extractedDate: this.editedExtraction.extractedDate,
          samples: this.editedExtraction.samples
        })
      }
    );
  }

  onUpdateExtraction(form: NgForm) {
    const value = form.value;
    const newExtractionSet = new ExtractionSet(value.name, value.type, value.analyst, value.notes, value.bufferAdded, value.bufferAddedDate, value.wasExtracted, value.extractedDate, value.samples);
    // console.log(newExtractionSet);
    this.extractionSetService.updateExtractionSet(this.editedExtractionIndex, newExtractionSet);
    this.showForm = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
