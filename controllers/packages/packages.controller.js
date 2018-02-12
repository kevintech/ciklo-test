const packagesService = require("../../services/packages");

const get = async function(request, response, next) {
    try {
        var packages = {};
        if (request.params.id)
        {
            packages = await packagesService.getById(request.params.id);
        }
        else
        {
            packages = await packagesService.getAll("test");
        }
        
        response.send(packages);
    }
    catch (error) {
        response.status(500).json(error);
    }
}

const create = async function(request, response, next) {
    try {
        var myPackage = await packagesService.createPackage(request.body);
        response.send(myPackage);
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

        var myPackage = await packagesService.updatePackage(request.params.id, request.body);
        response.send(myPackage);
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
        
        await packagesService.removePackage(request.params.id);
        response.send();
    }
    catch (error) {
        response.status(500).json(error);
    }
}

module.exports = { get, create, update, remove }