var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('postModel', {
    "description": "Model from TODOS",
    "connector": "memory",
    "fields": {
        "userId": {
            "type": "number",
            "required": true
        },
        "title": {
            "type": "string",
            "required": true
        },
        "body": {
            "type": "string"
        }
    },
    "actions": [
        "create",
        "read",
        "update",
        "delete",
        "deleteAll"
    ]
});
module.exports = Model;