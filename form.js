$(document).ready(function(){
	 $('.select2bs4').select2({
		theme: 'bootstrap4'
	});
	
	
	$('.select2bs4').on('change',function(){
		table(this);
	});
	
	});
   });function table(selecter){
	if (selecter.value == "0") {
		return false;
		}
		var id = selecter.value;
		var group;
		var office = selecter.id;
		
		$.ajax({
	method : "POST",
	url : "/formsubmission/table",	
	data : {
		"id" : id,
		"office" :office,
		"group" : group,
		"_csrf": $('#tkn').val(),
	},
	dataType : "json",
	success: function(a) {
			if(a.status){
				var item =a.data[0];
				{               
								$('#general_rep').html(item.count1);
								$('#sc_rep').html(item.count1);
								$('#total_count').html(item.count2);
								}
				}
	
			else{
				swal.fire("Info","Error to fetching!","info");	
				return false;	
			}
	},
		
});
	
}
