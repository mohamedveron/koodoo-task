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

        var status = "fixed"

        if(list.length < 2){
            return status;
        }

        var PrevDiff = Math.abs(list[0].account.balance.amount - list[1].account.balance.amount)
        var currentDiff = 0;

        for (let i = 1; i < list.length - 1; i++) {
            var currentDiff = Math.abs(list[i].account.balance.amount - list[i + 1].account.balance.amount);
            
            if(PrevDiff != currentDiff){
                status = "variable";
                return status;
            }
        }

        return status
    }
}

module.exports = BalanceHistory;