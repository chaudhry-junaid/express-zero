/**
 * Module dependencies.
 */
var _ = require('lodash');


exports.render = function(req, res) {
    res.send({status:'success', data:{
        message:'Welcome to Express Zero'
    }});
};
