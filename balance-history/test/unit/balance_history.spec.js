'use strict'

const { test } = use('Test/Suite')('Example')
const BalanceHistory = use('App/services/BalanceHistory');
const balanceHistoryService = new BalanceHistory();

test('testing sorted balance history list with { FIXED } change in balance', async ({ assert }) => {

  var balanceHistoryList = [
    {
      "monthNumber": 0, 
      "account": {
        "balance": { "amount": 0 }
      }
    },
    {
      "monthNumber": 1, 
      "account": {
        "balance": { "amount": 100 }
      }
    },
    {
      "monthNumber": 2, 
      "account": {
        "balance": { "amount": 200 }
      }
    }
  ];

  let status = await balanceHistoryService.getBalanceHistoryStatus(balanceHistoryList);

  assert.equal(status, 'fixed')
})

test('testing sorted balance history list with no change month and { FIXED } change in balance', async ({ assert }) => {

  var balanceHistoryList = [
    {
      "monthNumber": 0, 
      "account": {
        "balance": { "amount": 0 }
      }
    },
    {
      "monthNumber": 1, 
      "account": {
        "balance": { "amount": 100 }
      }
    },
    {
      "monthNumber": 2, 
      "account": {
        "balance": { "amount": 100 }
      }
    },

    {
      "monthNumber": 3, 
      "account": {
        "balance": { "amount": 200 }
      }
    }
  ];

  let status = await balanceHistoryService.getBalanceHistoryStatus(balanceHistoryList);

  assert.equal(status, 'fixed')
})


test('testing unsorted balance history list with { FIXED } change in balance', async ({ assert }) => {

  var balanceHistoryList = [
    {
      "monthNumber": 0, 
      "account": {
        "balance": { "amount": 0 }
      }
    },
    {
      "monthNumber": 3, 
      "account": {
        "balance": { "amount": 300 }
      }
    },
    {
      "monthNumber": 2, 
      "account": {
        "balance": { "amount": 200 }
      }
    },

    {
      "monthNumber": 1, 
      "account": {
        "balance": { "amount": 100 }
      }
    }
  ];

  let status = await balanceHistoryService.getBalanceHistoryStatus(balanceHistoryList);

  assert.equal(status, 'fixed')
})

test('testing unsorted balance history list with a deposite month and { FIXED } change in balance', async ({ assert }) => {

  var balanceHistoryList = [
    {
      "monthNumber": 0, 
      "account": {
        "balance": { "amount": 200 }
      }
    },
    {
      "monthNumber": 3, 
      "account": {
        "balance": { "amount": 300 }
      }
    },
    {
      "monthNumber": 2, 
      "account": {
        "balance": { "amount": 200 }
      }
    },

    {
      "monthNumber": 1, 
      "account": {
        "balance": { "amount": 300 }
      }
    }
  ];

  let status = await balanceHistoryService.getBalanceHistoryStatus(balanceHistoryList);

  assert.equal(status, 'fixed')
})

test('testing unsorted balance history list with { VARIABLE } change in balance', async ({ assert }) => {

  var balanceHistoryList = [
    {
      "monthNumber": 0, 
      "account": {
        "balance": { "amount": 0 }
      }
    },
    {
      "monthNumber": 3, 
      "account": {
        "balance": { "amount": 400 }
      }
    },
    {
      "monthNumber": 2, 
      "account": {
        "balance": { "amount": 200 }
      }
    },

    {
      "monthNumber": 1, 
      "account": {
        "balance": { "amount": 100 }
      }
    }
  ];

  let status = await balanceHistoryService.getBalanceHistoryStatus(balanceHistoryList);

  assert.equal(status, 'variable')
})
