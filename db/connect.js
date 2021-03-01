const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sessionauth", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

module.exports = mongoose