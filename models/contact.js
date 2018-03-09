module.exports = function(sequelize, DataTypes) {
    var Contact = sequelize.define("Contact", {
        // firstName (VARCHAR, NOT NULL, between 1-100 characters)

        // lastName (VARCHAR, NOT NULL, between 1-100 characters)

        // contactType (VARCHAR, Default value "Personal")       

        // phoneNumber (VARCHAR, length 10 characters, numbers only)

        // emailAddress (VARCHAR, must be valid email format)
    });
    // be sure to return the model!
    return Contact;
};
