const trucksService = require("../../services/trucks");

const get = async function(request, response, next) {
    try {
        var trucks = {};
        if (request.params.id)
        {
            trucks = await trucksService.getById(request.params.id);
        }
        else
        {
            trucks = await trucksService.getAll("test");
        }
        
        response.send(trucks);
    }
    catch (error) {
        response.status(500).json(error);
    }
}

const create = async function(request, response, next) {
    try {
        var truck = await trucksService.createTruck(request.body);
        response.send(truck);
    }
    catch (error) {
        response.status(500).json(error);
    }
}

const update = async function(request, response, next) {
    try {
        if (!request.params.id)
        {
            return response.send(400);
        }

        var truck = await trucksService.updateTruck(request.params.id, request.body);
        response.send(truck);
    }
    catch (error) {
        response.status(500).json(error);
    }
}

const remove = async function(request, response, next) {
    try {
        if (!request.params.id)
        {
            return response.send(400);
        }
        
        await trucksService.removeTruck(request.params.id);
        response.send("Deleted successfully");
    }
    catch (error) {
        response.status(500).json(error);
    }
}

module.exports = { get, create, update, remove }