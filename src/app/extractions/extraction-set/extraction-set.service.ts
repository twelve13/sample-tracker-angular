import { ExtractionSet } from './extraction-set.model';
import { Sample } from '../../samples/sample/sample.model';
import { Subject } from 'rxjs';

export class ExtractionSetService {
	extractionsChanged = new Subject<ExtractionSet[]>();
	startedEditing = new Subject<number>();

	private extractions: ExtractionSet[] = [
    new ExtractionSet('Extraction 1', 'STR', 'CC', '', true, '6/20/2023', false, '', [
    	new Sample('Sample 4', 'clean well', true, true, false, 'CC', false, '7/25/23', false, '7/25/23', 'Extraction 1'),
    	new Sample('Sample 5', '', true, false, false, 'CC', false, '7/25/23', false, '7/25/23', 'Extraction 1'),
    	new Sample('Sample 6', 'consume all', false, true, true, 'CC', false, '7/25/23', false, '7/25/23', 'Extraction 1')]),
    new ExtractionSet('Extraction 2', 'STR', 'CC', '', true, '6/20/2023', true, '6/21/2023', [
    	new Sample('Sample 7', 'clean well', true, true, false, 'CC', false, '7/25/23', false, '7/25/23', 'Extraction 2'),
    	new Sample('Sample 8', '', true, false, false, 'CC', false, '7/25/23', false, '7/25/23', 'Extraction 2')]),
    new ExtractionSet('Extraction 3', 'mito', 'CAB', '', false, '', false, '', [])
  ];

	getExtractionSets() {
		return this.extractions.slice();
	}

	getExtractionSet(id: number) {
		return this.extractions[id];
	}

	addExtractionSet(extractionSet: ExtractionSet) {
		this.extractions.push(extractionSet);
		this.extractionsChanged.next(this.extractions.slice());
	}

	updateExtractionSet(index: number, newExtractionSet: ExtractionSet) {
		this.extractions[index] = newExtractionSet;
		newExtractionSet.samples.forEach(sample => sample.extractionSet = newExtractionSet.name);
		this.extractionsChanged.next(this.extractions.slice());
	}

	deleteExtractionSet(index: number) {
		this.extractions.splice(index, 1);
		this.extractionsChanged.next(this.extractions.slice());
	}
}