const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
        title: {
            type: String,
            required: true,            
        },
        description: {
            type: String,
        },
        dueDate: {
            type: Date,
        },
        status: {
            type: String,
            enum: ["To Do", "In Progress", "Finished"],
            default: "To Do"
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
);

const task = mongoose.model("Task", taskSchema);

module.exports = task;