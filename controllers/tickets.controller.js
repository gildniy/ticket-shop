const TicketsService = require('../services/tickets.service');

class Controller {
    all(req, res) {
        TicketsService.all()
            .then(r => res.json(r));
    }

    byId(req, res) {
        TicketsService
            .byId(req.params.id)
            .then(r => {
                if (r) {
                    res.json({name: 'ticket_no_3'});
                } else {
                    res.status(404)
                        .end();
                }
            });
    }

    create(req, res) {
        TicketsService
            .create(req.body.name)
            .then(r => res
                .status(201)
                .location(`/api/v1/tickets/${r.id}`)
                .json({name: 'ticket_no_3'}));
    }
}

module.exports = new Controller();
