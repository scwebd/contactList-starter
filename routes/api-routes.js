var db = require("../models");

module.exports = function(app) {
    // this route should find all contacts in the table and render them using the Handlebars 
    // 'contacts' template, sorted ascending by firstName
    app.get("/", function(req, res) {

    });
    
    // this route should find all contacts of a particular type (Personal or Business) and render them 
    // using the Handlebars 'contacts' template, sorted ascending by firstName
    app.get("/:type", function(req, res) {

        // BONUS: pass the contact type through to the handlebars template... be sure
        // to make the contact type title-cased!

    });

    // this route should find all contacts in the table and display them as JSON
    app.get("/api/contacts", function(req, res) {
    
    });

    // this route should add a new contact to the table, and should then redirect to the route '/api/contacts'
	app.post("/api/contacts", function(req, res) {
        
    });

    // this route should delete a contact from the table, if the id matches the ':id' url param
	app.delete("/api/contacts/:id", function(req, res) {
        
    });
}