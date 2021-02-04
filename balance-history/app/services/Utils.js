'use strict'

let _instance = null;

class Utils{

    

    constructor(){

        if(!_instance){
            _instance = this;
        }

        return _instance;
    }

    SortBalanceHistoryList(historyList){

        var list = [];

        for (let item in historyList) {
            
            list.push(historyList[item])
        }

        list.sort((a, b) => (a.monthNumber < b.monthNumber) ? 1 : -1 )

        return list;
    }
}

module.exports = Utils;