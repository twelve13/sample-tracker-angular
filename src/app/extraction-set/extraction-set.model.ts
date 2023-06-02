import { Sample } from '../sample/sample.model';

export class ExtractionSet {
	public name: string;
	public type: string;
	public analyst: string;
	public notes: string;
	public bufferAdded: boolean;
	public bufferAddedDate: string;
	public wasExtracted: boolean;
	public extractedDate: string;
	public samples: Sample[];

	constructor(name: string, type: string, analyst: string, notes: string, bufferAdded: boolean, bufferAddedDate: string, wasExtracted: boolean, extractedDate: string, samples: Sample[]) {
		this.name = name;
		this.type = type;
		this.analyst = analyst;
		this.notes = notes;
		this.bufferAdded = bufferAdded;
		this.bufferAddedDate = bufferAddedDate;
		this.wasExtracted = wasExtracted;
		this.extractedDate = extractedDate;
		this.samples = samples;
	}
}