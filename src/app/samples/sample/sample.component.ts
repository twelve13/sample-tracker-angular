import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Sample } from './sample.model';
import { SampleService } from '../sample/sample.service';
import { ExtractionSet } from '../../extractions/extraction-set/extraction-set.model';
import { ExtractionSetService } from '../../extractions/extraction-set/extraction-set.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})

export class SampleComponent {
  @Input() sample: Sample;
  @Input() index: number;

  //inform angular we will need an instance of the sample service and extraction set service, anyName: ServiceName
  constructor(private sampleService: SampleService, private extractionSetService: ExtractionSetService) {}

  extractions: ExtractionSet[];


  ngOnInit() {
    this.extractions = this.extractionSetService.getExtractionSets();
  }

  onEditSample(index: number) {
    //.next specifies what to do on successful emissions. this is part of rxjs
    this.sampleService.startedEditing.next(index);
  }

  onMarkCleaned() {
    const date = new Date();
    const cleanedDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
    const cleanedSample = new Sample(this.sample.name, this.sample.notes, this.sample.strs, this.sample.mito, this.sample.isPriority, this.sample.analyst, true, cleanedDate, this.sample.wasSampled, "", this.sample.extractionSet);
    this.sampleService.updateSample(this.index, cleanedSample);
  }

  onMarkSampled() {
    const date = new Date();
    const sampledDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
    const sampledSample = new Sample(this.sample.name, this.sample.notes, this.sample.strs, this.sample.mito, this.sample.isPriority, this.sample.analyst, this.sample.wasCleaned, this.sample.cleanedDate, true, sampledDate, this.sample.extractionSet);
    this.sampleService.updateSample(this.index, sampledSample);
  }

  onAssignExtraction(form: NgForm) {
    const value = form.value.extraction;

    let extractionIndex = 0;

    //find index of this selected extraction set
    this.extractions.forEach((extraction, index) => {
      if(extraction.name === value){
        return extractionIndex = index;
      }
    })

    const updatedExtractionSet = this.extractions[extractionIndex];

    // this.sample.extractionSet = this.extractions[extractionIndex].name;
    // add the sample to the selected extraction setsublim
    updatedExtractionSet.samples.push(this.sample);

    // delete sample after it's assigned to an extraction
    this.sampleService.deleteSample(this.index);
  }

}
