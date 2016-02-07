
var DocumentDBClient = require('documentdb').DocumentClient;
var async = require('async');

function PresentationList(presentation) {
  this.presentation = presentation;
}

module.exports = PresentationList;

PresentationList.prototype = {
    /*
    showTasks: function (req, res) {
        var self = this;

        var querySpec = {
            query: 'SELECT * FROM root r WHERE 1=1',
            parameters: [{
                name: '@sCode',
                value: false
            }]
        };

        self.presentation.find(querySpec, function (err, items) {
            if (err) {
                throw (err);
            }

            res.render('index', {
                title: 'Events',
                presentations: items
            });
        });
    },
    */
    
        showTasks: function (req, res) {
        res.render('index', {
                title: 'The best event of your life',
            });

    },
    like: function (req, res) {
        var self = this;
        var item = req.body;

        self.presentation.likeItem(item, function (err) {
            if (err) {
                throw (err);
            }

            res.redirect('/');
        });
    },
    
    dislike: function (req, res) {
        var self = this;
        var item = req.body;

        self.presentation.dislikeItem(item, function (err) {
            if (err) {
                throw (err);
            }

            res.redirect('/');
        });
    },


    completeTask: function (req, res) {
        var self = this;
        var completedTasks = Object.keys(req.body);

        async.forEach(completedTasks, function taskIterator(completedTask, callback) {
            self.taskDao.updateItem(completedTask, function (err) {
                if (err) {
                    callback(err);
                } else {
                    callback(null);
                }
            });
        }, function goHome(err) {
            if (err) {
                throw err;
            } else {
                res.redirect('/');
            }
        });
    }
};