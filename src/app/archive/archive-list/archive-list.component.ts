import { Component, OnInit } from '@angular/core';

import { Sample } from '../../samples/sample/sample.model';
import { ArchiveService } from '../archive.service';

@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.css']
})
export class ArchiveListComponent {

  samples: Sample[];

  constructor(private archiveService: ArchiveService){}

  ngOnInit() {
    this.samples = this.archiveService.getSamples();
    // console.log(this.samples)
    this.archiveService.samplesChanged
      .subscribe(
        (samples: Sample[]) => {
          this.samples = samples;
        })
  }
}