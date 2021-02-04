'use strict'

const Utils = use('App/services/Utils');
const utils = new Utils();


let _instance = null;

class BalanceHistory{

    constructor(){

        if(!_instance){
            _instance = this;
        }

        return _instance;
    }


    async getBalanceHistoryStatus(historyList){

        var list = utils.SortBalanceHistoryList(historyList);

        console.log(list);

        return "fixed"
    }
}

module.exports = BalanceHistory;