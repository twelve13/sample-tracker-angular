import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Sample } from '../../samples/sample/sample.model';
import { SampleService } from '../../samples/sample/sample.service';

@Component({
  selector: 'app-archive-sample',
  templateUrl: './archive-sample.component.html',
  styleUrls: ['./archive-sample.component.css']
})

export class ArchiveSampleComponent {
  @Input() sample: Sample;
  @Input() index: number;

  constructor(private sampleService: SampleService) {}

}
