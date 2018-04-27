  $( document ).ready(function() {
      // $( ".open-contributions" ).click(function() {
        $( ".lifafa-open-contributions" ).addClass( "is-shown" );
        $( ".content-wrapper" ).addClass( "show-overlay" );
      // });


      $(document).mouseup(function(e) {
       var Click_todo;
       Click_todo = $('.lifafa-open-contributions');
       if (!Click_todo.is(e.target) && Click_todo.has(e.target).length === 0) {
         $('.lifafa-open-contributions').removeClass('is-shown');
         $( ".content-wrapper" ).removeClass( "show-overlay" );
       }
      });

      $( ".collapsible" ).click(function() {
        $( ".collapsible-content" ).slideToggle( "slow" );
      });

  });



  // Add active class to the current button (highlight it)
    var header = document.getElementById("category_events");
    var btns = header.getElementsByClassName("select_event_bg");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("selected");
        current[0].className = current[0].className.replace(" selected", "");
        this.className += " selected";
      });
    }




    function countdown( elementName, minutes, seconds ){
      var element, endTime, hours, mins, msLeft, time;

      function twoDigits( n )
      {
          return (n <= 9 ? "0" + n : n);
      }

      function updateTimer()
      {
          msLeft = endTime - (+new Date);
          if ( msLeft < 1000 ) {
              // element.innerHTML = "countdown's over!";
              element.innerHTML = "<div class='resetPassword_btn'><button href='#' id='resend_otp_btn' class='verify_button_otp primary_text_color button font14 pb-0'>RESEND SMS</button></div>";
          } else {
              time = new Date( msLeft );
              hours = time.getUTCHours();
              mins = time.getUTCMinutes();
              element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
              setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
          }
      }

      element = document.getElementById( elementName );
      endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
      updateTimer();
  }

  countdown( "otp-resend-countdown", 00, 60 );

