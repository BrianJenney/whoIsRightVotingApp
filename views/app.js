



function ronSwanson(){
$.ajax({url: "http://ron-swanson-quotes.herokuapp.com/v2/quotes", success: function(result){
        console.log(result);

        document.getElementById("quotes").innerHTML = result;
    }});
}