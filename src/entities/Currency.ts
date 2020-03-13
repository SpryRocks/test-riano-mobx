export default class Currency {
    constructor(id: string, name: string) {
        this._id = id;
        this.name = name;
    }

    _id: string;
    name: string;
}
