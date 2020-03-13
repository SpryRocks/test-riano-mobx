export default class Country {
    constructor(ISO: string, id: string, name: string, preferredCurrencyId: string) {
        this.ISO = ISO;
        this._id = id;
        this.name = name;
        this.preferredCurrencyId = preferredCurrencyId;
    }

    ISO: string;
    _id: string;
    name: string;
    preferredCurrencyId: string;
}
