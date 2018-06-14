module.exports = function(sequelize, DataTypes) {
    var Contact = sequelize.define("Contact", {
        // firstName (VARCHAR, NOT NULL, between 1-30 characters)

        // lastName (VARCHAR, NOT NULL, between 1-30 characters)

        // contactType (VARCHAR, Default value "Personal")       

        // phoneNumber (VARCHAR, NULL, length 10 characters, numbers only)

        // emailAddress (VARCHAR, NULL, must be valid email format)
    });
    // be sure to return the model!
    return Contact;
};
