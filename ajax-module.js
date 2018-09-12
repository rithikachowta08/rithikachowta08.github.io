/* Module to make GET request to any API. Returns a method call taking options as parameter
options{
  url : URL endpoint to make the request to,
  callBackFn : reference to callback function to execute on ready state change
}
 */

var CALLAPI = (function() {
    function call(options) {
      var requestObj = new XMLHttpRequest(),
        URL = options.url,
        callBackFn = options.callBackFn;
      requestObj.onreadystatechange = callBackFn.bind(requestObj);
      requestObj.open("GET", URL);
      requestObj.send();
    }  
    return {
      call: call
    };
  })();