import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ExtractionSet } from '../extraction-set/extraction-set.model';
import { ExtractionSetService } from '../extraction-set/extraction-set.service';

@Component({
  selector: 'app-extractions-list',
  templateUrl: './extractions-list.component.html',
  styleUrls: ['./extractions-list.component.css']
})
export class ExtractionsListComponent implements OnInit {

  extractions: ExtractionSet[];

  constructor(private extractionSetService: ExtractionSetService){

  }

  ngOnInit() {
    this.extractions = this.extractionSetService.getExtractionSets();
    this.extractionSetService.extractionsChanged
      .subscribe(
        (extractions: ExtractionSet[]) => {
          this.extractions = extractions;
        })
  }
}