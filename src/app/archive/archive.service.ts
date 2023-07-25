import { Sample } from '../samples/sample/sample.model';
import { ExtractionSet } from '../extractions/extraction-set/extraction-set.model';
import { ExtractionSetService } from '../extractions/extraction-set/extraction-set.service';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ArchiveService {
	samplesChanged = new EventEmitter<Sample[]>();
	startedEditing = new Subject<number>();

	private samples: Sample[] = [
    new Sample('Sample 100', 'clean well', true, true, false, 'CC', true, '4/25/23', false, '', 'Extraction 0'),
    new Sample('Sample 200', 'archive test', true, false, false, 'CC', false, '', false, '', 'Extraction 0'),
    new Sample('Sample 300', 'consume all', false, true, true, 'CC', true, '6/1/23', true, '6/2/23', 'Extraction 0')
  ];

	getSamples() {
		//make a copy so not affecting original array
		return this.samples.slice();
	}

	archiveExtraction(extraction: ExtractionSet) {
		extraction.samples.forEach(sample => this.samples.push(sample));
		this.samplesChanged.emit(this.samples.slice());
	}
}