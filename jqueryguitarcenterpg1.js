function callAJAX() {
	$.ajax({
		url: "jasonfile/guitar.json",
		success : function(result) {
			
			localStorage["JSONDATA"] = JSON.stringify(result);
			
			
		}
	});

}
$(document).ready(function() {

	$("#prod1").css("visibility", "hidden");
	$("#cust1").css("visibility", "hidden");
	$("#ship1").css("visibility", "hidden");
});

var index = 0;

$("#prev").click(function() {

	if (localStorage["JSONDATA"] == "") {
		callAJAX();

	}

	var jsonData = JSON.parse(localStorage["JSONDATA"]);
	if (index == 0) {
		index = jsonData.allProducts.length - 1;

	}

	$("#guitar_mainpic").attr("src", jsonData.allProducts[index].image_path);
	index--;
	$("#cust1").html(jsonData.allProducts[index].customer_reviews);
	$("#prod1").html(jsonData.allProducts[index].product_description);
	$("#ship1").html(jsonData.allProducts[index].shipping_details);
	
	});

$("#nex").click(function() {
	$(document).ready(function() {

		$("#prod1").css("visibility", "visible");
		$("#cust1").css("visibility", "visible");
		$("#ship1").css("visibility", "visible");
	});
	if (localStorage["JSONDATA"] == "") {
		callAJAX();

	}

	var jsonData = JSON.parse(localStorage["JSONDATA"]);
	if (index == jsonData.allProducts.length) {
		index = 0;
       
	}

	$("#guitar_mainpic").attr("src", jsonData.allProducts[index].image_path);
	$("#cust1").html(jsonData.allProducts[index].customer_reviews);
	$("#prod1").html(jsonData.allProducts[index].product_description);
	$("#ship1").html(jsonData.allProducts[index].shipping_details);
	localStorage.i=index;
	index++;
});
callAJAX();
$("#buy").click(function(){
	window.location.href="jqueryguitarcenter2.html?index="+index;
	
	
	
	
});
