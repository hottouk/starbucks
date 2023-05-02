var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      function onYouTubeIframeAPIReady() { //함수 이름 임의 변경 금지!!
        new YT.Player('player', {
          videoId: 'GDzFAc8x0h4',
          playerVars:{
            autoplay: true,
            loop: true, 
            playlist:'GDzFAc8x0h4' //반복 재생할 ID 목록
          }
          // events:{
          //   onReady:function(event){
          //     event.target.mute() //음소거
          //   }
          // }
        });
      }