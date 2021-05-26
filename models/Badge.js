const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BadgeSchema = new Schema({
    badgeName: {
        type: String,
        trim: true
    },
    badge_ID: {
        type: Number
    },
    image_name: {
        type: String
    }
    
});

const Badge = mongoose.model("Badge", BadgeSchema);

module.exports = Badge;
