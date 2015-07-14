var utils = require('./utils.js');

module.exports = {
    //Load data from JSON
    allItems: require('../data/items.json'),
    checkedItems: [],

    /**
     * Get an array of randomly selected items
     *
     * @returns {Array}
     */
    getRandomItems: function()
    {
        //Define variables
        var originalItems = this.allItems.slice();
        var bingoItems = [];

        //Loop for each needed bingo item
        for (var i = 0; i < 16; i++) {
            //Generate a random number and splice it from the total bingo items that are still left
            var randomNumber = utils.getRandomNumber(0, originalItems.length - 1);
            var randomItem = originalItems.splice(randomNumber, 1)[0];

            //Add the BingoItem object to the array
            bingoItems.push(randomItem);
        }

        return bingoItems;
    },

    /**
     * Remove the item from the itemChecklist & return the check item
     *
     * @param id
     * @returns {boolean}
     */
    checkItemOfList: function(id)
    {
        //If the item was already checked, return false
        if(this.isItemChecked(id)){
            return false;
        }

        //If the item hasn't been checked before, add it to the checked list
        this.checkedItems.push(id);
        return true;
    },

    /**
     * Function to check whether an item is already checked or not
     *
     * @param id
     * @returns {boolean}
     */
    isItemChecked: function(id)
    {
        return (this.checkedItems.indexOf(id) !== -1);
    }
};