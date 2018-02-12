const usersService = require("../../services/users");

const get = async function(request, response, next) {
    try {
        var users = {};
        if (request.params.id)
        {
            users = await usersService.getById(request.params.id);
        }
        else
        {
            users = await usersService.getAll("test");
        }
        
        response.send(users);
    }
    catch (error) {
        response.status(500).json(error);
    }
}

const create = async function(request, response, next) {
    try {
        var user = await usersService.createUser(request.body);
        response.send(user);
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

        var user = await usersService.updateUser(request.params.id, request.body);
        response.send(user);
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
        
        await usersService.removeUser(request.params.id);
        response.send();
    }
    catch (error) {
        response.status(500).json(error);
    }
}

module.exports = { get, create, update, remove }