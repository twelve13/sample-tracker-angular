import { Sample } from './sample.model';
import { EventEmitter } from '@angular/core';

export class SampleService {
	samplesChanged = new EventEmitter<Sample[]>();
	private samples: Sample[] = [
    new Sample('Sample 1', 'clean well', true, true, false, 'CC', true, '', false, ''),
    new Sample('Sample 2', '', true, false, false, 'CC', false, '', false, ''),
    new Sample('Sample 3', 'consume all', false, true, true, 'CC', true, '', true, '')
  ];

	getSamples() {
		//make a copy so not affecting original array
		return this.samples.slice();
	}

	addSample(sample: Sample) {
		this.samples.push(sample);
		this.samplesChanged.emit(this.samples.slice());
	}
}