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

        // we have to sort the history in descending order 
        var list = utils.SortBalanceHistoryList(historyList);

        var status = "fixed"

        if(list.length < 2){
            return status;
        }
        
        // we calculate the absolute value because the change in amount not nessessary will be just decreased it can be increased also
        var PrevDiff = Math.abs(list[0].account.balance.amount - list[1].account.balance.amount)
        var currentDiff = 0;

        for (let i = 1; i < list.length - 1; i++) {
            var currentDiff = Math.abs(list[i].account.balance.amount - list[i + 1].account.balance.amount);
            
            if(currentDiff != 0 && PrevDiff != 0 && PrevDiff != currentDiff){
                status = "variable";
                return status;
            }
        }

        return status
    }
}

module.exports = BalanceHistory;