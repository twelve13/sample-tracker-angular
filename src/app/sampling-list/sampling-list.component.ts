import { Component, OnInit } from '@angular/core';

import { Sample } from '../sample/sample.model';
import { SampleService } from '../sample/sample.service';

@Component({
  selector: 'app-sampling-list',
  templateUrl: './sampling-list.component.html',
  styleUrls: ['./sampling-list.component.css']
})
export class SamplingListComponent {
  samples: Sample[];

  constructor(private sampleService: SampleService) {

  }

  ngOnInit() {
    this.samples = this.sampleService.getSamples();
  }
}
