function playVideo()
{
	var mediaItem = new MediaItem( "video", "http://movietrailers.apple.com/movies/sony_pictures/hoteltransylvania2/hoteltransylvania2-tlr1_720p.mov" );

	var playlist = new Playlist();
	playlist.push( mediaItem );

	var player = new Player();
	player.playlist = playlist;
	player.present();
}

App.onLaunch = function( options )
{
  console.log( 'App launching' );
  var request = new XMLHttpRequest();
  request.responseType = "document";
  var responseHandler = function()
  {
    console.log( "Handling document" );
    // navigationDocument.pushDocument( request.responseXML );
    var parser = new DOMParser();
    var document = parser.parseFromString( request.responseXML, "application/xml" );
    document.addEventListener( "select", playVideo, false );
    navigationDocument.pushDocument( document );
  };
  request.addEventListener( "load", responseHandler, false );

  request.open( "GET", "https://l0s.github.io/HelloWorldTV/template/index.tvml", true );
  request.send();
};

App.onExit = function()
{
  console.log( 'App exiting' );
};