/**
 * Created by tong on 16-9-12.
 */
'use strict';

const doRestore = require("../restore");

describe("getHistoryDatas", ()=> {
  it("shoud return the array of historyData", ()=> {
    let historyData = `e4e87cb2-8e9a-4749-abb6-26c59344dfee
2016/09/02 22:30:46
cat1 10 9

351055db-33e6-4f9b-bfe1-16f1ac446ac1
2016/09/02 22:30:52
cat1 10 9 2 -1
cat2 2 3

dcfa0c7a-5855-4ed2-bc8c-4accae8bd155
2016/09/02 22:31:02
cat1 12 8 3 4`;
    let expected = [`e4e87cb2-8e9a-4749-abb6-26c59344dfee
2016/09/02 22:30:46
cat1 10 9`, `351055db-33e6-4f9b-bfe1-16f1ac446ac1
2016/09/02 22:30:52
cat1 10 9 2 -1
cat2 2 3`, `dcfa0c7a-5855-4ed2-bc8c-4accae8bd155
2016/09/02 22:31:02
cat1 12 8 3 4`];
    expect(doRestore.getHistoryDatas(historyData)).toEqual(expected);
  });
});

describe("getTimeHistoryData", ()=> {
  it("should return every time's historyData", ()=> {
    let historyDatas = [`e4e87cb2-8e9a-4749-abb6-26c59344dfee
2016/09/02 22:30:46
cat1 10 9`, `351055db-33e6-4f9b-bfe1-16f1ac446ac1
2016/09/02 22:30:52
cat1 10 9 2 -1
cat2 2 3`, `dcfa0c7a-5855-4ed2-bc8c-4accae8bd155
2016/09/02 22:31:02
cat1 12 8 3 4`];
    let expected = [
      [`e4e87cb2-8e9a-4749-abb6-26c59344dfee`,
        `2016/09/02 22:30:46`,
        `cat1 10 9`], [
        `351055db-33e6-4f9b-bfe1-16f1ac446ac1`,
        `2016/09/02 22:30:52`,
        `cat1 10 9 2 -1`,
        `cat2 2 3`
      ], [
        `dcfa0c7a-5855-4ed2-bc8c-4accae8bd155`,
        `2016/09/02 22:31:02`,
        `cat1 12 8 3 4`
      ]];

    expect(doRestore.getTimeHistoryDatas(historyDatas)).toEqual(expected);
  });
});