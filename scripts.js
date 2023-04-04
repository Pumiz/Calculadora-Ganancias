$(document).ready(function(){
	$('#deposito, #duracion').keyup(function () {

        var Seleccionar = document.getElementById('selector');
        var tna=0;
        if(Seleccionar.value == 'mPago'){
            tna = 0.176;
        }
        if(Seleccionar.value == 'plazof'){
            tna = 0.213;
        }
        if(Seleccionar.value == 'ualaa'){
            tna = 0.176;
        }
        if(Seleccionar.value == 'narjX'){
            tna = 0.178;
        }
		if(Seleccionar.value == 'pPay'){
            tna = 0.175;
        }


        var deposito = $("#deposito").val(),
			duracion = $("#duracion").val(),
			flag = deposito!='' && tna!='' && duracion!='';
			flag1 = !isNaN(parseFloat(deposito)) && !isNaN(parseFloat(tna)) && !isNaN(parseFloat(duracion));

		if(flag){

			if(!flag1)
			{
				$('#calc_result')
						.parents('div.form-group:first')
						.addClass('alert')
						.removeClass('alert-danger')
						.removeClass('alert-success')
						.addClass('alert-danger');
				$('#calc_result').val('Error!');
			}
			else
			{
				//var cf = deposito * (1 + (tna / 100) * (duracion / 365));
				var cf = ((deposito / tna)*100) / duracion;


				if (cf >= 0) {
					$('#calc_result').val(cf.toFixed(2));
					$('#calc_result')
							.parents('div.form-group:first')
							.addClass('alert')
							.removeClass('alert-danger')
							.removeClass('alert-success')
							.addClass('alert-success');
				}
			}
		}
		else
		{
			$('#calc_result')
					.parents('div.form-group:first')
					.removeClass('alert')
					.removeClass('alert-danger')
					.removeClass('alert-success');
			$('#calc_result').val('');
		}
	});
});