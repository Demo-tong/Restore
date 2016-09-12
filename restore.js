/**
 * Created by tong on 16-9-12.
 */
'use strict';

function getHistoryDatas(historyData) {
  return historyData.split('\n\n');
}

function getTimeHistoryDatas(historyDatas) {

  return historyDatas.map((item)=> {
    return item.split('\n');
  });
}

function isLeagalId(id){
  let pattern = /^[\w]{8}-[\w]{4}-[\w]{4}-[\w]{4}-[\w]{12}$/;
  return pattern.test(id);
}

module.exports = {
  getHistoryDatas,
  getTimeHistoryDatas,
  isLeagalId
};