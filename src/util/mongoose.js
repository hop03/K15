module.exports = {
    multipleMongooseToObject : function (mongooseArrays) {
        return mongooseArrays.map(mongooseArray => mongooseArray.toObject());
    },
    mongooseToObject : function(mongooseArray) {
        return mongooseArray ? mongooseArray.toObject() : mongooseArray;
    }
    
};
