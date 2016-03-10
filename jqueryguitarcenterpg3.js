$("#home").click(function() {
	window.location.href = "jqueryguitarpg1.html";

});
var jsondata = JSON.parse(localStorage["JSONDATA"]);
$(document).ready(function(){
	var product = jsondata.allProducts;
	var index = parseInt(localStorage.i);
	var jsonData = JSON.parse(localStorage["JSONDATA"]);
	console.log(jsonData);
	$("#imgPage3").attr("src",jsonData.allProducts[localStorage.i].image_path);
	$("#adata").html(product[index].product_description);


});