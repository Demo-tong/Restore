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

module.exports = {
  getHistoryDatas,
  getTimeHistoryDatas
};