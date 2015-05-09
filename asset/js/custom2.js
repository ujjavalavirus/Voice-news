 function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

 $(document).ready(function(){

 	var id =  parseInt(getParameterByName('id'))-1;

        $.ajax({ 	
        type: 'GET', 
        url: 'asset/js/convertcsv.json', 
        dataType: 'json',
        success: function (prr_dashboard, status) {
                        //console.log(prr_dashboard[].desc);
                 		var headline = "<p class='desc'>"+prr_dashboard[id].desc+"</a></p>";

                 		$("#homepagenews").append(headline);
                         		

                     		
				 		var voicelist = responsiveVoice.getVoices();
				 		
						var vselect = $("#voiceselection");
							//alert("sdfdsf");
						$.each(voicelist, function() {
							//	alert("testss");
						    vselect.append($("<option />").val(this.name).text(this.name));
						}); 

						$("#playbutton").click(function(){

							 responsiveVoice.speak($("#homepagenews").text(),'Hindi Female');
						

						});
                      


        },
        error: function(e){
            console.log(e);
        }
});




 });


