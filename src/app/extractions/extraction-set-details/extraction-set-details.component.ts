import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ExtractionSet } from '../extraction-set/extraction-set.model';
import { ExtractionSetService } from '../extraction-set/extraction-set.service';

@Component({
  selector: 'app-extraction-set-details',
  templateUrl: './extraction-set-details.component.html',
  styleUrls: ['./extraction-set-details.component.css']
})
export class ExtractionSetDetailsComponent implements OnInit {
  extractionSet: ExtractionSet;
  id: number;

  constructor(private extractionSetService: ExtractionSetService,
              private route: ActivatedRoute) {

  }
  //watch for changes in id
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          //returns a string so put + to cast it as a number
          this.id = +params['id'];
          this.extractionSet = this.extractionSetService.getExtractionSet(this.id);
        }
      );
  }
}