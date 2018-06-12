$(document).ready(function() {
  // typing animation
  (function($) {
    $.fn.writeText = function(content) {
      var contentArray = content.split(""),
        current = 0,
        elem = this;
      setInterval(function() {
        if (current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 80);
    };
  })(jQuery);

  // initialize wow.js
  new WOW().init();
  // initiate full page scroll
  $("#fullpage").fullpage({
    scrollBar: false,
    responsiveWidth: 400,
    navigation: true,
    navigationTooltips: ["Home", "About", "Portfolio", "Contact", "Connect"],
    anchors: ["Home", "About", "Portfolio", "Contact", "Connect"],
    menu: "#myMenu",
    fitToSection: false,
  });

  // move section down one
  $(document).on("click", "#moveDown", function() {
    $.fn.fullpage.moveSectionDown();
  });
	
  // fullpage.js link navigation
  $(document).on("click", "#skills", function() {
    $.fn.fullpage.moveTo(2);
  });

  $(document).on("click", "#projects", function() {
    $.fn.fullpage.moveTo(3);
  });

  $(document).on("click", "#contact", function() {
    $.fn.fullpage.moveTo(4);
  });

  // smooth scrolling
  $(function() {
    $("a[href*=#]:not([href=#])").click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top
            },
            700
          );
          return false;
        }
      }
    });
  });

  //ajax form
  $(function() {
    // Get the form.
    var form = $("#ajax-contact");

    // Get the messages div.
    var formMessages = $("#form-messages");

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
      // Stop the browser from submitting the form.
      e.preventDefault();

      // Serialize the form data.
      var formData = $(form).serialize();

      // Submit the form using AJAX.
      $.ajax({
        type: "POST",
        url: $(form).attr("action"),
        data: formData
      })
        .done(function(response) {
          // Make sure that the formMessages div has the 'success' class.
          $(formMessages).removeClass("error");
          $(formMessages).addClass("success");

          // Set the message text.
          $(formMessages).text(response);

          // Clear the form.
          $("#name").val("");
          $("#email").val("");
          $("#message").val("");
        })
        .fail(function(data) {
          // Make sure that the formMessages div has the 'error' class.
          $(formMessages).removeClass("success");
          $(formMessages).addClass("error");

          // Set the message text.
          if (data.responseText !== "") {
            $(formMessages).text(data.responseText);
          } else {
            $(formMessages).text(
              "Oops! An error occured and your message could not be sent."
            );
          }
        });
    });
  });
});
$(function() {  
  $('.btn-6')
    .on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
    	$(this).find('span').css({top:relY, left:relX})
    });
  $('[href=#]').click(function(){return false});
});

function openNews() {
	window.open ('experiment.html','_self',false)
}
