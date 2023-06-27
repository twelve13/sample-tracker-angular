import { Sample } from './sample.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class SampleService {
	samplesChanged = new EventEmitter<Sample[]>();
	startedEditing = new Subject<number>();

	private samples: Sample[] = [
    new Sample('Sample 1', 'clean well', true, true, false, 'CC', true, '6/1/23', false, '', null),
    new Sample('Sample 2', '', true, false, false, 'CC', false, '', false, '', null),
    new Sample('Sample 3', 'consume all', false, true, true, 'CC', true, '6/1/23', true, '6/2/23', null)
  ];

	getSamples() {
		//make a copy so not affecting original array
		return this.samples.slice();
	}

	getSample(index: number) {
		return this.samples[index];
	}

	addSample(sample: Sample) {
		this.samples.push(sample);
		this.samplesChanged.emit(this.samples.slice());
	}

	updateSample(index: number, newSample: Sample) {
		this.samples[index] = newSample;
		this.samplesChanged.next(this.samples.slice());
	}

	deleteSample(index: number) {
		this.samples.splice(index, 1);
		this.samplesChanged.next(this.samples.slice());
	}
}