'use strict'
const BalanceHistory = use('App/services/BalanceHistory');
const balanceHistoryService = new BalanceHistory();

class BalanceHistoryController{



        /**
   * Show a status of the account Balance History.
   * POST sections
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async getHistoryStatus ({ request, response }) {


    let requestBody = request.post();

    let responseData = {};

    try {

      let status = await balanceHistoryService.getBalanceHistoryStatus(requestBody);
      responseData = status;

    } catch (error) {

      console.log("get balance history Throws error.................. ", error);
      responseData = {"error" : null};
    }
    
    response.status(200).send(responseData); 
  }

}

module.exports = BalanceHistoryController