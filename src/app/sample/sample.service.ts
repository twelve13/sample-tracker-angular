import { Sample } from './sample.model';

export class SampleService {
	private samples: Sample[] = [
    new Sample('Sample 1', 'clean well', true, true, false, 'CC', true, '', false, ''),
    new Sample('Sample 2', '', true, false, false, 'CC', false, '', false, ''),
    new Sample('Sample 3', 'consume all', false, true, true, 'CC', true, '', true, '')
  ];

	getSamples() {
		//make a copy so not affecting original array
		return this.samples.slice();
	}
}