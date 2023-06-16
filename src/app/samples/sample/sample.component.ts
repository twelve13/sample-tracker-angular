import { Component, Input } from '@angular/core';

import { Sample } from './sample.model';
import { SampleService } from '../sample/sample.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  @Input() sample: Sample;
  @Input() index: number;

  constructor(private sampleService: SampleService) {}

  onEditSample(index: number) {
    this.sampleService.startedEditing.next(index);
  }

  onMarkCleaned() {
    const date = new Date();
    const cleanedDate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
    const cleanedSample = new Sample(this.sample.name, this.sample.notes, this.sample.strs, this.sample.mito, this.sample.isPriority, this.sample.analyst, true, cleanedDate, this.sample.wasSampled, "");
    this.sampleService.updateSample(this.index, cleanedSample);
  }

  onMarkSampled() {
    const date = new Date();
    const sampledDate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
    const sampledSample = new Sample(this.sample.name, this.sample.notes, this.sample.strs, this.sample.mito, this.sample.isPriority, this.sample.analyst, this.sample.wasCleaned, this.sample.cleanedDate, this.sample.wasSampled, sampledDate);
    this.sampleService.updateSample(this.index, sampledSample);
  }

}
