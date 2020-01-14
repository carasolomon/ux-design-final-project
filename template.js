// Tacara Solomon
 function loadBlog()
    { var template = $('template').html();
    Mustache.parse(template);

    var showContent = Mustache.render(template, {
        blogs : [ 
	  	  { "blogName" : "Mind, Body, Green",
	        "blogURL" : "http://mindbodygreen.com"
	      },
          {  "blogName": "Banyan Botanicals", 
           "blogURL": "https://www.banyanbotanicals.com/"
	      }
	    ] 
    })
    $('#blogs').html(showContent);
};