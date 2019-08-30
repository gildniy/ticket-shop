const db = require('./tickets.database');

class TicketsService {
    all() {
        return db.all();
    }

    byId(id) {
        return db.byId(id);
    }

    create(name) {
        return db.insert(name);
    }
}

module.exports = new TicketsService();
