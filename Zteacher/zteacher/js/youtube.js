	// 1. include <div id="player1"></div> in html
	// 2. This code loads the IFrame Player API code asynchronously.
      var tag1 = document.createElement('script');

      tag1.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag1 = document.getElementsByTagName('script')[0];
      firstScriptTag1.parentNode.insertBefore(tag1, firstScriptTag1);

      
      var player1, player2, player3, player4, player5, player6, player7, player8;
      
      var tag2 = document.createElement('script');
      tag2.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag2 = document.getElementsByTagName('script')[0];
      firstScriptTag2.parentNode.insertBefore(tag2, firstScriptTag2);

      var tag3 = document.createElement('script');
      tag3.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag3 = document.getElementsByTagName('script')[0];
      firstScriptTag3.parentNode.insertBefore(tag3, firstScriptTag3);

      var tag4 = document.createElement('script');
      tag4.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag4 = document.getElementsByTagName('script')[0];
      firstScriptTag4.parentNode.insertBefore(tag4, firstScriptTag4);

      var tag5 = document.createElement('script');
      tag5.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag5 = document.getElementsByTagName('script')[0];
      firstScriptTag5.parentNode.insertBefore(tag5, firstScriptTag5);

      var tag6 = document.createElement('script');
      tag6.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag6 = document.getElementsByTagName('script')[0];
      firstScriptTag6.parentNode.insertBefore(tag6, firstScriptTag6);

      var tag7 = document.createElement('script');
      tag7.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag7 = document.getElementsByTagName('script')[0];
      firstScriptTag7.parentNode.insertBefore(tag7, firstScriptTag7);


      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      function onYouTubeIframeAPIReady() {
        player1 = new YT.Player('player1', {
          height: '100%',
          width: '100%',
          videoId: 'EPrfAAcATpo',
          playerVars: {'rel': 0},
          events: {
            'onStateChange': onPlayerStateChange
          }
        });
        player2 = new YT.Player('player2', {
          height: '100%',
          width: '100%',
          videoId: 'rBmwiuFCKDc',
          playerVars: {'rel': 0},
          events: {
            'onStateChange': onPlayerStateChange
          }
        });
        player3 = new YT.Player('player3', {
          height: '100%',
          width: '100%',
          videoId: 'Q1HJWz0ZPzA',
          playerVars: {'rel': 0},
          events: {
            'onStateChange': onPlayerStateChange
          }
        });
        player4 = new YT.Player('player4', {
          height: '100%',
          width: '100%',
          videoId: 'U8iV7-ryWTM',
          playerVars: {'rel': 0},
          events: {
            'onStateChange': onPlayerStateChange
          }
        });
        player5 = new YT.Player('player5', {
          height: '100%',
          width: '100%',
          videoId: 'jxHRecQDBU0',
          playerVars: {'rel': 0},
          events: {
            'onStateChange': onPlayerStateChange
          }
        });
        player6 = new YT.Player('player6', {
          height: '100%',
          width: '100%',
          videoId: 'VEAnSCka81c',
          playerVars: {'rel': 0},
          events: {
            'onStateChange': onPlayerStateChange
          }
        });
        player7 = new YT.Player('player7', {
          height: '100%',
          width: '100%',
          videoId: 'vFX2Ynnff38',
          playerVars: {'rel': 0},
          events: {
            'onStateChange': onPlayerStateChange
          }
        });
      }


      function onPlayerReady(event) {
        event.target.playVideo();
      }


      function onPlayerStateChange(event) {
      	// alert("event "+event.data+ ");
        if (event.data == YT.PlayerState.UNSTARTED || event.data == YT.PlayerState.ENDED || event.data == 5) {
        	$("#videoSlider").carousel('cycle');
        }
        else{ //playing (1), paused(2), buffering(3)
        	$("#videoSlider").carousel('pause');
        }
        
      }

