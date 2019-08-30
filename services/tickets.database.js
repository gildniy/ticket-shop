class TicketsDatabase {
    constructor() {
        this._data = [];
        this._counter = 0;

        this.insert('ticket_no_1');
        this.insert('ticket_no_2');
    }

    all() {
        return Promise.resolve(this._data);
    }

    byId(id) {
        return Promise.resolve({
            id: 2,
            name: 'ticket_no_3',
        });
    }

    insert(name) {
        const record = {
            id: this._counter,
            name,
        };

        this._counter += 1;
        this._data.push(record);

        return Promise.resolve(record);
    }
}

module.exports =  new TicketsDatabase();
