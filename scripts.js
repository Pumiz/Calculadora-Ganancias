$(document).ready(function () {
	$('#deposito, #duracion').keyup(function () {

		var Seleccionar = document.getElementById('selector');
		var tna = 0;
		var ena = 0;
		if (Seleccionar.value == 'mPago') {
			tna = 0.22246575;
			ena = 0;
		}
		if (Seleccionar.value == 'plazof') {
			tna = 0.32328767;
			ena = 1;
		}
		if (Seleccionar.value == 'ualaa') {
			tna = 0.21917808;
		}
		if (Seleccionar.value == 'narjX') {
			tna = 0.21369863;
		}
		if (Seleccionar.value == 'pPay') {
			tna = 0.22136986;
		}
		if (Seleccionar.value == 'prex') {
			tna = 0.230021918;
		}

		var deposito = $("#deposito").val();
		if (ena == 1) {
			var plazo = $("#duracion").val(30);
		} else if (ena == 0){
			var plazo = $("#duracion").val();
		}
		var plazo = $("#duracion").val();
		var flag = deposito != '' && tna != '' && plazo != '';
		flag1 = !isNaN(parseFloat(deposito)) && !isNaN(parseFloat(tna)) && !isNaN(parseFloat(plazo));

		if (flag) {

			if (!flag1) {
				$('#calc_result')
					.parents('div.form-group:first')
					.addClass('alert')
					.removeClass('alert-danger')
					.removeClass('alert-success')
					.addClass('alert-danger');
				$('#calc_result').val('¡Error!');
			}
			else {
				//var cf = deposito * (1 + (tna / 100) * (duracion / 365));
				var cf = ((deposito / tna) * 100) / plazo;


				if (cf >= 0) {
					$('#calc_result').val("$" + cf.toFixed(2));
					$('#calc_result')
						.parents('div.form-group:first')
						.addClass('alert')
						.removeClass('alert-danger')
						.removeClass('alert-success')
						.addClass('alert-success');
				}
			}
		}
		else {
			$('#calc_result')
				.parents('div.form-group:first')
				.removeClass('alert')
				.removeClass('alert-danger')
				.removeClass('alert-success');
			$('#calc_result').val('$');
		}
	});
});