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
        var list = [];

        for (let item in historyList) {
            
            list.push(historyList[item])
        }


        console.log(list);

        list.sort((a, b) => (a.monthNumber > b.monthNumber) ? 1 : -1 )

        console.log(list);

        return "fixed"
    }
}

module.exports = BalanceHistory;