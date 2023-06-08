import { Component } from '@angular/core';

import { Sample } from '../sample/sample.model';
import { SampleService } from '../sample/sample.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sample-edit',
  templateUrl: './sample-edit.component.html',
  styleUrls: ['./sample-edit.component.css']
})
export class SampleEditComponent {
  constructor(private sampleService: SampleService) {}

  onAddItem( form: NgForm ) {
    const value = form.value;
    const newSample = new Sample(value.name, value.notes, value.strs, value.mito, value.priority, value.analyst, false, "", false, "");
    this.sampleService.addSample(newSample);
  }
}
