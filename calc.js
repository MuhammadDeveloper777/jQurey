$(document).ready(
	function() 
{
	$("#input1")
		let calc="";
		$("#one").click(
				function() 
			{
				calc=calc+"1";
				$("#input1").val(calc);
			}

			);
		$("#two").click(
			function() 
			{
				calc=calc+"2";
				$("#input1").val(calc);
			}

			);
		$("#three").click(
				function() 
				{
					calc=calc+"3";
					$("#input1").val(calc);
				}
			);
		$("#four").click(
				function() 
				{
					calc=calc+"4";
					$("#input1").val(calc);
				}
			);
		$("#five").click(
				function() 
				{
					calc=calc+"5";
					$("#input1").val(calc);
				}
			);
		$("#six").click(
				function() 
				{
					calc=calc+"6";
					$("#input1").val(calc);
				}
			);
		$("#seven").click(
				function() 
				{
					calc=calc+"7";
					$("#input1").val(calc);
				}
			);
		$("#eight").click(
				function() 
				{
					calc=calc+"8";
					$("#input1").val(calc);
				}
			);
		$("#nine").click(
				function() 
				{
					calc=calc+"9";
					$("#input1").val(calc);
				}
			);
	//==================================================

	$("#plus").click(
			function() 
			{
				calc=calc+"+";
				$("#input1").val(calc);
			}
		);
	$("#minus").click(
			function() 
			{
				calc=calc+"-";
				$("#input1").val(calc);
			}
		)
	$("#multiply").click(
			function() 
			{
				calc=calc+"*";
				$("#input1").val(calc);
			}
		);
	$("#divide").click(
			function() 
			{
				calc=calc+"/";
				$("#input1").val(calc);
			}
		);
	$("#equal").click(
			function() 
			{
				calc=eval(calc);
				$("#input1").val(calc);
			}
		);

		
















}



);