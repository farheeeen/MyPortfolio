var jsondata = JSON.parse(localStorage["JSONDATA"]);

$(document).ready(function() {
	var product = jsondata.allProducts;

	var index = parseInt(localStorage.i);
	/*console.log(index);
	console.log(product[index].image_path);*/
	$("#image1").attr("src", product[index].image_path)
	$("#data").html(product[index].product_description)
});

function isValidEmailAddress(emailAddress) {
	var pattern = new RegExp(
			/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	// alert( pattern.test(emailAddress) );
	return pattern.test(emailAddress);
}

var CC = false, FN = false, LN = false, EML = false;
function chkStatus() {
	if (CC == true && FN == true && LN == true && EML == true) {
		$("#review").disabled = false;
	} else {
		$("#review").disabled = true;
	}
}

$("#submit_btn").click(
		function() {
			var eml = $('#email1').val();
			if (isValidEmailAddress(eml)) {
				EML=true;
				$("#email1").css("background-color", "lightgreen")
			} else {
				EML=false;
				$("#email1").css("background-color", "red")
			}

			if ($("#fname1").val() == null || $("#fname1").val() == ""
					|| isNaN($("#fname1").val()) == false)

			{     FN=false;
				$("#fname1").css("background-color", "red")
				$("#spa1").html("Dont Use Numbers");
			}

			else {  FN=true;
				$("#fname1").css("background-color", "lightgreen")
			}

			if ($("#lname1").val() == null || $("#lname1").val() == ""
					|| isNaN($("#lname1").val()) == false)

			{  LN=false;
				$("#lname1").css("background-color", "red")
				$("#spa2").html("Dont Use Numbers");
			}

			else { LN=true;
				$("#lname1").css("background-color", "lightgreen")
			}

			if ($("#cc1").val().length != 16 || $("#cc1").val() == ""
					|| isNaN($("#cc1").val()) == true) {
                 CC= false;
				$("#cc1").css("background-color", "red")
				$("#spa3").html("Too Long or too short number");
			} else { CC=true;
				$("#spa3").css("background-color", "lightgreen")
			}

			if (CC == true && FN == true && LN == true && EML == true){		
				$("#footer").css("visibility","visible");
			
			   }
			   else{
				   $("#footer").css("visibility","hidden")
			   }
           
			var name= $("#fname1").val();
			$("#span5").text(name);
			
			var name2= $("#lname1").val();
			$("#span6").text(name2);
			
			var name3= $("#cc1").val();
			$("#span7").text(name3);
				
			var name4= $("#email1").val();
			$("#span8").text(name4);
			
		
		});


var index=1
$("#review").click(function() {
	if (CC == true && FN == true && LN == true && EML == true) {
		window.location.href="jqueryguitarcenterpg3.html?index="+localStorage.i;
		
		
	} else {
	alert("Fill the form properly !");
	}
	
	
	

});
