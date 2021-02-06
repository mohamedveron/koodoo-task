# koodoo-task
This app is developed using adonis js framework

## Algorithm Description:
1- Sort the balance history list in descending order.

2- Calculate the absolute value between the last two monthes.

3- If the value the same or no change in the amount will be fixed else will be variable.

## Covered Scenarios by the algorithm :

1- Unsorted and Sorted balance history list with FIXED change in balance.

2- Unsorted balance history list with no change in amount month and FIXED change in balance. 

3- Unsorted balance history list with a deposite month and FIXED change in balance.

4- Unsorted and Sorted balance history list with VARIABLE change in balance.

## Setup

Node.js >= 8.0.0

npm >= 3.0.0

# Install adonis js

npm i -g @adonisjs/cli

# Run the unit tests:

```bash
adonis install @adonisjs/vow
cd balance-history
adonis test
```

## Start the http server:

Use the adonis command to run the app

```bash
cd balance-history
adonis serve --dev
```

### Apis:

# 1- http://localhost:3333/balanceHistoryStatus

Method: post 

Body: 
[
  {
  
    "monthNumber": 0, 
    "account": {
      "balance": { "amount": 0 }
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
    
  },

  {
      
    "monthNumber": 3, 
    "account": {
      "balance": { "amount": 200 }
    }
    
  }
  
]
