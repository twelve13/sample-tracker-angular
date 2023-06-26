import { Component } from '@angular/core';

import { Sample } from '../sample/sample.model';
import { SampleService } from '../sample/sample.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sample-create',
  templateUrl: './sample-create.component.html',
  styleUrls: ['./sample-create.component.css']
})
export class SampleCreateComponent {
  constructor(private sampleService: SampleService) {}

  onAddItem( form: NgForm ) {
    const value = form.value;
    // console.log(value);
    const newSample = new Sample(value.name, value.notes, value.strs, value.mito, value.priority, value.analyst, false, "", false, "");
    this.sampleService.addSample(newSample);
  }
}
