const Service = require('../models/serviceModel');

// Create a new service
exports.createService = (req, res) => {
    const { name, description, price } = req.body;
    if (!name || !price) {
        return res.status(400).json({ error: 'Name and price are required' });
    }

    const newService = new Service({ name, description, price });
    newService.save()
        .then(service => res.status(201).json(service))
        .catch(err => res.status(500).json({ error: 'Failed to add service' }));
};

// Get all services
exports.getAllServices = (req, res) => {
    Service.find()
        .then(services => res.status(200).json(services))
        .catch(err => res.status(500).json({ error: 'Failed to fetch services' }));
};

// Update a service
exports.updateService = (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    Service.findByIdAndUpdate(id, { name, description, price }, { new: true })
        .then(updatedService => {
            if (!updatedService) {
                return res.status(404).json({ error: 'Service not found' });
            }
            res.status(200).json(updatedService);
        })
        .catch(err => res.status(500).json({ error: 'Failed to update service' }));
};

// Delete a service
exports.deleteService = (req, res) => {
    const { id } = req.params;
    Service.findByIdAndDelete(id)
        .then(deletedService => {
            if (!deletedService) {
                return res.status(404).json({ error: 'Service not found' });
            }
            res.status(200).json({ message: 'Service deleted successfully' });
        })
        .catch(err => res.status(500).json({ error: 'Failed to delete service' }));
};

