/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.21/15.4.4.21-9-c-ii-3.js
 * @description Array.prototype.reduce - callbackfn takes 4 arguments
 */


function testcase() { 
 
  var bCalled = false;
  function callbackfn(prevVal, curVal, idx, obj)
  { 
    bCalled = true;
    if(prevVal === true && arguments.length === 4)   
      return true;
    else
      return false;
  }
  var arr = [0,1,2,3,4,5,6,7,8,9];
  if(arr.reduce(callbackfn,true) === true && bCalled === true)
    return true;
 }
runTestCase(testcase);
