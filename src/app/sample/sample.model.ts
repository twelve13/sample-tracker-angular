export class Sample {
	public name: string;
	public notes: string;
	public strs: boolean;
	public mito: boolean;
	public isPriority: boolean;
	public analyst: string;
	public wasCleaned: boolean;
	public cleanedDate: string;
	public wasSampled: boolean;
	public sampledDate: string;

	constructor(name: string, notes: string, strs: boolean, mito: boolean, isPriority: boolean, analyst: string, wasCleaned: boolean, cleanedDate: string, wasSampled: boolean, sampledDate: string) {
		this.name = name;
		this.notes = notes;
		this.strs = strs;
		this.mito = mito;
		this.isPriority = isPriority;
		this.analyst = analyst;
		this.wasCleaned = wasCleaned;
		this.cleanedDate = cleanedDate;
		this.wasSampled = wasSampled;
		this.sampledDate = sampledDate;
	}
}