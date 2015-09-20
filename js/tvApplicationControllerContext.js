function pushDocument( document )
{
  navigationDocument.pushDocument( document )
}

function getDocument( url )
{
  var request = new XMLHttpRequest();
  request.responseType = "document";
  var responseHandler = function()
  {
    pushDocument( request.responseXML );
  }
  request.addEventListener( "load", responseHandler, false );
  request.send();
  return request;
}

App.onLaunch = function( options )
{
  console.log( 'App launching' );
  var url = "https://l0s.github.io/HelloWorldTV/template/index.tvml";
  getDocument( url )
}

App.onExit = function()
{
  console.log( 'App exiting' );
}
