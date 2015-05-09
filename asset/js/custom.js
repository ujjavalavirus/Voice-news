 function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

 $(document).ready(function(){

 	var lang =  getParameterByName('lang');
 			
        $.ajax({ 	
        type: 'GET', 
        url: 'asset/js/convertcsv.json', 
        dataType: 'json',
        success: function (prr_dashboard, status) {
                        //var prr = prr_dashboard.details;
                       // alert(prr_dashboard.length);

                      // if(lang == )

                         for(var i=0;i<prr_dashboard.length;i++){
                         		var headline = "";
                         		var newlang = prr_dashboard[i].language;
                         	//	console.log(newlang);
                         		if(newlang == lang){
                         		var headline = "<p><a href=''>"+prr_dashboard[i].headline+"</a></p>";

                         		$("#homepagenews").append(headline);
                         		}


                         }

                         var lengthofnews = $(".newsheading li").length;
 		
				 		var voicelist = responsiveVoice.getVoices();
				 		
						var vselect = $("#voiceselection");
							//alert("sdfdsf");
						$.each(voicelist, function() {
							//	alert("testss");
						    vselect.append($("<option />").val(this.name).text(this.name));
						}); 

						$("#playbutton").click(function(){

							 responsiveVoice.speak($(".homepagenews").text(),'Hindi Female');
						

						});
                      


        },
        error: function(e){
            console.log(e);
        }
});




 });


