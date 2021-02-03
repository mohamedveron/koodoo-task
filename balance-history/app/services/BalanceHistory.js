'use strict'


let _instance = null;

class BalanceHistory{

    constructor(){

        if(!_instance){
            _instance = this;
        }

        return _instance;
    }


    async getBalanceHistoryStatus(historyList){

        return "fixed"
    }
}

module.exports = BalanceHistory;