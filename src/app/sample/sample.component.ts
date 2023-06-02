import { Component, Input } from '@angular/core';

import { Sample } from './sample.model';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  @Input() sample: Sample;
}
