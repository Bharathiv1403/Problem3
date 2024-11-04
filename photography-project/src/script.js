

// /* Please ❤ this if you like it! */


// (function($) { "use strict";
		
// 	//Page cursors

//     document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
// 		console.log(11,n);
		
//         t.style.left = n.clientX + "px", 
// 		t.style.top = n.clientY + "px", 
// 		e.style.left = n.clientX + "px", 
// 		e.style.top = n.clientY + "px", 
// 		i.style.left = n.clientX + "px", 
// 		i.style.top = n.clientY + "px"
//     });
//     var t = document.getElementById("cursor"),
//         e = document.getElementById("cursor2"),
//         i = document.getElementById("cursor3");
//     function n(t) {
//         e.classList.add("hover"), i.classList.add("hover")
//     }
//     function s(t) {
//         e.classList.remove("hover"), i.classList.remove("hover")
//     }
//     s();
//     for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
//         o(r[a])
//     }
//     function o(t) {
//         t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
//     }

	
// 	//About page
	
// 	$(".about-text").on('click', function () {
// 		$("body").addClass("about-on");
// 	});
// 	$(".about-close").on('click', function () {
// 		$("body").removeClass("about-on");
// 	});

	
// 	//Contact page
	
// 	$(".contact-text").on('click', function () {
// 		$("body").addClass("contact-on");
// 	});
// 	$(".contact-close").on('click', function () {
// 		$("body").removeClass("contact-on");
// 	});

	
// 	//Travel portfolio page
	
// 	$(".travel").on('click', function () {
// 		$("body").addClass("travel-on");
// 	});
// 	$(".travel-close").on('click', function () {
// 		$("body").removeClass("travel-on");
// 	});

	
// 	//Wildlife portfolio page
	
// 	$(".wildlife").on('click', function () {
// 		$("body").addClass("wildlife-on");
// 	});
// 	$(".wildlife-close").on('click', function () {
// 		$("body").removeClass("wildlife-on");
// 	});

	
// 	//Nature portfolio page
	
// 	$(".nature").on('click', function () {
// 		$("body").addClass("nature-on");
// 	});
// 	$(".nature-close").on('click', function () {
// 		$("body").removeClass("nature-on");
// 	});

	
// })(jQuery); 


/* Please ❤ this if you like it! */

$(document).ready(function() {
    "use strict";

    // Page cursors
    document.body.addEventListener("mousemove", function(event) {
        const cursorElements = [t, e, i];
        cursorElements.forEach(cursor => {
			//  console.log(cursor,100);
			  if (cursor) {
		
				  cursor.style.left = event.clientX + "px";
				  cursor.style.top = event.clientY + "px";
			  }
			 
        });
    });

    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");

    function addHoverClass() {
		//  console.log(e,115);
        e.classList.add("hover");
        i.classList.add("hover");
    }

    function removeHoverClass() {
		//  console.log(e,122);
		  if (e) {
			
			  e.classList.remove("hover");
			  i.classList.remove("hover");
		  }
		 
    }

    removeHoverClass();
	
    document.querySelectorAll(".hover-target").forEach(target => {
         
       
        target.addEventListener("mouseover", addHoverClass);
        target.addEventListener("mouseout", removeHoverClass);
    });

    // About page
    $(".about-text").on('click', function() {
        $("body").addClass("about-on");
    });
    $(".about-close").on('click', function() {
        $("body").removeClass("about-on");
    });

    // Contact page
    $(".contact-text").on('click', function() {
        $("body").addClass("contact-on");
    });
    $(".contact-close").on('click', function() {
        $("body").removeClass("contact-on");
    });

    // Travel portfolio page
    $(".travel").on('click', function() {
        $("body").addClass("travel-on");
    });
    $(".travel-close").on('click', function() {
        $("body").removeClass("travel-on");
    });

    // Marriage portfolio page
    $(".marriage").on('click', function() {
        $("body").addClass("marriage-on");
    });
    $(".marriage-close").on('click', function() {
        $("body").removeClass("marriage-on");
    });

    // Nature portfolio page
    $(".nature").on('click', function() {
        $("body").addClass("nature-on");
    });
    $(".nature-close").on('click', function() {
        $("body").removeClass("nature-on");
    });
   $(".getposts").on('click',function() {
    
       const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
   
       $.get(apiUrl)
           .done(function(data) {
               $('#result').html(JSON.stringify(data, null, 2));
           })
           .fail(function() {
               $('#result').html('Error fetching data.');
           });
   
   })
    

});

