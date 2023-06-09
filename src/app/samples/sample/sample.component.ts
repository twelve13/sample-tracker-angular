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
}
