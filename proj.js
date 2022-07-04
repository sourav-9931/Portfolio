
//Infinite Scroll
$(window).on("scroll", function() {
    //page height
    var scrollHeight = $(document).height();
    //scroll position
    var scrollPos = $(window).height() + $(window).scrollTop();
    // fire if the scroll position is 300 pixels above the bottom of the page
    if(((scrollHeight - 300) >= scrollPos) / scrollHeight == 0){
      $('.load-more-days-button').click();
     }
   });

  //  var imageUrls = [
  //   "images/just.jpeg",
  //   "images/meme.jpeg",
  //   "images/food1.jpeg",
  //   "images/food2.jpeg",
  //   "images/latest.jpeg"
  //  ];
  


  var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 5000);