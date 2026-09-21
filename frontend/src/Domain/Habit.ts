import { randomUUID } from "crypto";


export class Habit {
    private readonly _id: string;

    constructor(
        private _title: string,
        private _description?: string,
        private _repeat?: number,
        private _color: string,
        id: string = randomUUID(),
    ) {
        this._id = id;
    }

    set title(title: string) {
        this._string = String;
    }

    get id() {
        return this._id
    }
}