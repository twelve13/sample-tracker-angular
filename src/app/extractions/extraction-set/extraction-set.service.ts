import { ExtractionSet } from './extraction-set.model';
import { Sample } from '../../samples/sample/sample.model';

export class ExtractionSetService {
	private extractions: ExtractionSet[] = [
    new ExtractionSet('Extraction 1', 'STR', 'CC', '', true, '', false, '', [
    	new Sample('Sample 4', 'clean well', true, true, false, 'CC', false, '', false, ''),
    	new Sample('Sample 5', '', true, false, false, 'CC', false, '', false, ''),
    	new Sample('Sample 6', 'consume all', false, true, true, 'CC', false, '', false, '')]),
    new ExtractionSet('Extraction 2', 'STR', 'CC', '', true, '', true, '', [
    	new Sample('Sample 7', 'clean well', true, true, false, 'CC', false, '', false, ''),
    	new Sample('Sample 8', '', true, false, false, 'CC', false, '', false, '')]),
    new ExtractionSet('Extraction 3', 'mito', 'CAB', '', false, '', false, '', [])
  ];

	getExtractionSets() {
		return this.extractions.slice();
	}

	getExtractionSet(id: number) {
		return this.extractions[id];
	}
}