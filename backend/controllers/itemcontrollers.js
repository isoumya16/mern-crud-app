const items = require("../config/mongodb_connect");

exports.additem = (request, response) => {
    const itemData = {
        name: request.body.name,
        description: request.body.description
    }

    const item = new items(itemData);

    item.save()

    response.send(JSON.stringify({ 'message': 'Item Created Successfully!' }))
}

exports.deleteitem = async (request, response) => {
    let items_id = { _id: request.params.id };
    let itemData = await items.deleteOne(items_id);
    response.send(JSON.stringify({ 'message': itemData }));
}

exports.updateitem = async (request, response) => {
    const updatedData = {
        name: request.body.name,
        description: request.body.description
    }

    let items_id = { _id: request.params.id };
    let itemData = await items.updateOne(items_id, updatedData);

    response.send(JSON.stringify({ 'message': itemData }))
}

exports.itemlist = async (request, response) => {
    let itemsData = await items.find();
    response.send(JSON.stringify({ 'message': itemsData }));
}

exports.singleitemlist = async (request, response) => {
    let items_id = { _id: request.params.id };
    let itemData = await items.findOne(items_id);
    response.send(JSON.stringify({ 'message': itemData }));
}
