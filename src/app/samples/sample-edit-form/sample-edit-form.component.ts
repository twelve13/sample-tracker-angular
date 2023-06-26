import { Component, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

import { Sample } from '../sample/sample.model';
import { SampleService } from '../sample/sample.service';


@Component({
  selector: 'app-sample-edit-form',
  templateUrl: './sample-edit-form.component.html',
  styleUrls: ['./sample-edit-form.component.css']
})
export class SampleEditFormComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) sampleForm: NgForm;
  subscription: Subscription;
  editedSampleIndex: number;
  editedSample: Sample;
  showForm = false;

  @Input() sample: Sample;
  @Input() index: number;

  constructor(private sampleService: SampleService) {}

  ngOnInit() {
    this.subscription = this.sampleService.startedEditing
    .subscribe(
      (index: number) => {
        this.showForm = true;
        this.editedSampleIndex = index;
        this.editedSample = this.sampleService.getSample(index);
        console.log(this.editedSample)
        this.sampleForm.setValue({
          name: this.editedSample.name,
          notes: this.editedSample.notes,
          strs: this.editedSample.strs,
          mito: this.editedSample.mito,
          priority: this.editedSample.isPriority,
          analyst: this.editedSample.analyst,
          wasCleaned: this.editedSample.wasCleaned,
          cleanedDate: this.editedSample.cleanedDate,
          wasSampled: this.editedSample.wasSampled,
          sampledDate: this.editedSample.sampledDate
        })
      }
    );
  }

  onUpdateSample(form: NgForm) {
    const value = form.value;
    const newSample = new Sample(value.name, value.notes, value.strs, value.mito, value.priority, value.analyst, value.wasCleaned, value.cleanedDate, value.wasSampled, value.sampledDate);
    this.sampleService.updateSample(this.editedSampleIndex, newSample);
    this.showForm = false;
  }

  onDeleteSample() {
    console.log(this.editedSampleIndex);
    this.sampleService.deleteSample(this.editedSampleIndex);
    this.showForm = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
