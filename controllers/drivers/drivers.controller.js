const driversService = require("../../services/drivers");

const get = async function(request, response, next) {
    try {
        var drivers = {};
        if (request.params.id)
        {
            drivers = await driversService.getById(request.params.id);
        }
        else
        {
            drivers = await driversService.getAll("test");
        }
        
        response.send(drivers);
    }
    catch (error) {
        response.status(500).json(error);
    }
}

const create = async function(request, response, next) {
    try {
        var driver = await driversService.createDriver(request.body);
        response.send(driver);
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

        var driver = await driversService.updateDriver(request.params.id, request.body);
        response.send(driver);
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
        
        await driversService.removeDriver(request.params.id);
        response.send("Deleted successfully");
    }
    catch (error) {
        response.status(500).json(error);
    }
}

module.exports = { get, create, update, remove }