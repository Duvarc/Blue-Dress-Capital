var portfolio = {'KLAC': 0, 'LRCX': 0, 'ADI': 0, 'ACN': 0, 'cash': 0};
var profits = {'Bill': 0, 'David': 0, 'Hung-wei': 0, 'Jason': 0, 'Rahul': 0, 'Ralles': 0, 'Rishov': 0, 'Selena': 0, 'Suhas': 0, 'Taiway': 0,
'Jonathan': 0, 'Kristin': 0, 'Mihir': 0, 'Nitish': 0};
var losses = {'Bill': 0, 'David': 0, 'Hung-wei': 0, 'Jason': 0, 'Rahul': 0, 'Ralles': 0, 'Rishov': 0, 'Selena': 0, 'Suhas': 0, 'Taiway': 0,
'Jonathan': 0, 'Kristin': 0, 'Mihir': 0, 'Nitish': 0};
var returns = {'Bill': 0, 'David': 0, 'Hung-wei': 0, 'Jason': 0, 'Rahul': 0, 'Ralles': 0, 'Rishov': 0, 'Selena': 0, 'Suhas': 0, 'Taiway': 0,
'Jonathan': 0, 'Kristin': 0, 'Mihir': 0, 'Nitish': 0};
var current_week = 30;

deposits = new Array(14);
deposits['Bill'] = new Array(30);
deposits['Bill'][0] = 1500;
deposits['Bill'][1] = 0;
deposits['Bill'][2] = 0;
deposits['Bill'][3] = 0;
deposits['Bill'][4] = 0;
deposits['Bill'][5] = 0;
deposits['Bill'][6] = 0;
deposits['Bill'][7] = 0;
deposits['Bill'][8] = 0;
deposits['Bill'][9] = 0;
deposits['Bill'][10] = 0;
deposits['Bill'][11] = 0;
deposits['Bill'][12] = 0;
deposits['Bill'][13] = 0;
deposits['Bill'][14] = 0;
deposits['Bill'][15] = 0;
deposits['Bill'][16] = 0;
deposits['Bill'][17] = 0;
deposits['Bill'][18] = 0;
deposits['Bill'][19] = 0;
deposits['Bill'][20] = 0;
deposits['Bill'][21] = 0;
deposits['Bill'][22] = 0;
deposits['Bill'][23] = 0;
deposits['Bill'][24] = 0;
deposits['Bill'][25] = 0;
deposits['Bill'][26] = 0;
deposits['Bill'][27] = 0;
deposits['Bill'][28] = 0;
deposits['Bill'][29] = 1500;
deposits['Bill'][30] = 0;

deposits['David'] = new Array(30);
deposits['David'][0] = 0;
deposits['David'][1] = 0;
deposits['David'][2] = 0;
deposits['David'][3] = 0;
deposits['David'][4] = 0;
deposits['David'][5] = 0;
deposits['David'][6] = 0;
deposits['David'][7] = 0;
deposits['David'][8] = 0;
deposits['David'][9] = 0;
deposits['David'][10] = 0;
deposits['David'][11] = 0;
deposits['David'][12] = 0;
deposits['David'][13] = 0;
deposits['David'][14] = 0;
deposits['David'][15] = 0;
deposits['David'][16] = 0;
deposits['David'][17] = 0;
deposits['David'][18] = 0;
deposits['David'][19] = 0;
deposits['David'][20] = 0;
deposits['David'][21] = 0;
deposits['David'][22] = 0;
deposits['David'][23] = 5000;
deposits['David'][24] = 0;
deposits['David'][25] = 0;
deposits['David'][26] = 0;
deposits['David'][27] = 0;
deposits['David'][28] = 0;
deposits['David'][29] = 0;
deposits['David'][30] = 0;

deposits['Hung-wei'] = new Array(30);
deposits['Hung-wei'][0] = 1400;
deposits['Hung-wei'][1] = 0;
deposits['Hung-wei'][2] = 0;
deposits['Hung-wei'][3] = 0;
deposits['Hung-wei'][4] = 0;
deposits['Hung-wei'][5] = 0;
deposits['Hung-wei'][6] = 0;
deposits['Hung-wei'][7] = 0;
deposits['Hung-wei'][8] = 0;
deposits['Hung-wei'][9] = 100;
deposits['Hung-wei'][10] = 0;
deposits['Hung-wei'][11] = 0;
deposits['Hung-wei'][12] = 0;
deposits['Hung-wei'][13] = 500;
deposits['Hung-wei'][14] = 1000;
deposits['Hung-wei'][15] = 1000;
deposits['Hung-wei'][16] = 0;
deposits['Hung-wei'][17] = 0;
deposits['Hung-wei'][18] = 0;
deposits['Hung-wei'][19] = 0;
deposits['Hung-wei'][20] = 0;
deposits['Hung-wei'][21] = 0;
deposits['Hung-wei'][22] = 0;
deposits['Hung-wei'][23] = 0;
deposits['Hung-wei'][24] = 0;
deposits['Hung-wei'][25] = 0;
deposits['Hung-wei'][26] = 50;
deposits['Hung-wei'][27] = 0;
deposits['Hung-wei'][28] = 0;
deposits['Hung-wei'][29] = 0;
deposits['Hung-wei'][30] = 0;

deposits['Jason'] = new Array(30);
deposits['Jason'][0] = 1500;
deposits['Jason'][1] = 0;
deposits['Jason'][2] = 0;
deposits['Jason'][3] = 0;
deposits['Jason'][4] = 0;
deposits['Jason'][5] = 0;
deposits['Jason'][6] = 0;
deposits['Jason'][7] = 0;
deposits['Jason'][8] = 0;
deposits['Jason'][9] = 1500;
deposits['Jason'][10] = 0;
deposits['Jason'][11] = 0;
deposits['Jason'][12] = 0;
deposits['Jason'][13] = 0;
deposits['Jason'][14] = 0;
deposits['Jason'][15] = 0;
deposits['Jason'][16] = 0;
deposits['Jason'][17] = 0;
deposits['Jason'][18] = 1000;
deposits['Jason'][19] = 0;
deposits['Jason'][20] = 0;
deposits['Jason'][21] = 0;
deposits['Jason'][22] = 0;
deposits['Jason'][23] = 1000;
deposits['Jason'][24] = 0;
deposits['Jason'][25] = 0;
deposits['Jason'][26] = 0;
deposits['Jason'][27] = 0;
deposits['Jason'][28] = 1000;
deposits['Jason'][29] = 0;
deposits['Jason'][30] = 0;

deposits['Jonathan'] = new Array(30);
deposits['Jonathan'][0] = 0;
deposits['Jonathan'][1] = 0;
deposits['Jonathan'][2] = 0;
deposits['Jonathan'][3] = 0;
deposits['Jonathan'][4] = 0;
deposits['Jonathan'][5] = 0;
deposits['Jonathan'][6] = 0;
deposits['Jonathan'][7] = 0;
deposits['Jonathan'][8] = 0;
deposits['Jonathan'][9] = 0;
deposits['Jonathan'][10] = 0;
deposits['Jonathan'][11] = 0;
deposits['Jonathan'][12] = 0;
deposits['Jonathan'][13] = 0;
deposits['Jonathan'][14] = 0;
deposits['Jonathan'][15] = 0;
deposits['Jonathan'][16] = 0;
deposits['Jonathan'][17] = 0;
deposits['Jonathan'][18] = 0;
deposits['Jonathan'][19] = 0;
deposits['Jonathan'][20] = 0;
deposits['Jonathan'][21] = 0;
deposits['Jonathan'][22] = 0;
deposits['Jonathan'][23] = 0;
deposits['Jonathan'][24] = 0;
deposits['Jonathan'][25] = 0;
deposits['Jonathan'][26] = 0;
deposits['Jonathan'][27] = 500;
deposits['Jonathan'][28] = 0;
deposits['Jonathan'][29] = 0;
deposits['Jonathan'][30] = 0;

deposits['Kristin'] = new Array(30);
deposits['Kristin'][0] = 100;
deposits['Kristin'][1] = 0;
deposits['Kristin'][2] = 0;
deposits['Kristin'][3] = 0;
deposits['Kristin'][4] = 0;
deposits['Kristin'][5] = 0;
deposits['Kristin'][6] = 0;
deposits['Kristin'][7] = 0;
deposits['Kristin'][8] = 0;
deposits['Kristin'][9] = 0;
deposits['Kristin'][10] = 0;
deposits['Kristin'][11] = 0;
deposits['Kristin'][12] = 0;
deposits['Kristin'][13] = 0;
deposits['Kristin'][14] = 0;
deposits['Kristin'][15] = 0;
deposits['Kristin'][16] = 0;
deposits['Kristin'][17] = 0;
deposits['Kristin'][18] = 0;
deposits['Kristin'][19] = 0;
deposits['Kristin'][20] = 0;
deposits['Kristin'][21] = 0;
deposits['Kristin'][22] = 0;
deposits['Kristin'][23] = 0;
deposits['Kristin'][24] = 0;
deposits['Kristin'][25] = 0;
deposits['Kristin'][26] = 0;
deposits['Kristin'][27] = 0;
deposits['Kristin'][28] = 0;
deposits['Kristin'][29] = 0;
deposits['Kristin'][30] = 0;

deposits['Mihir'] = new Array(30);
deposits['Mihir'][0] = 200;
deposits['Mihir'][1] = 0;
deposits['Mihir'][2] = 0;
deposits['Mihir'][3] = 0;
deposits['Mihir'][4] = 0;
deposits['Mihir'][5] = 0;
deposits['Mihir'][6] = 0;
deposits['Mihir'][7] = 0;
deposits['Mihir'][8] = 0;
deposits['Mihir'][9] = 0;
deposits['Mihir'][10] = 0;
deposits['Mihir'][11] = 0;
deposits['Mihir'][12] = 0;
deposits['Mihir'][13] = 0;
deposits['Mihir'][14] = 300;
deposits['Mihir'][15] = 0;
deposits['Mihir'][16] = 0;
deposits['Mihir'][17] = 0;
deposits['Mihir'][18] = 0;
deposits['Mihir'][19] = 0;
deposits['Mihir'][20] = 0;
deposits['Mihir'][21] = 0;
deposits['Mihir'][22] = 0;
deposits['Mihir'][23] = 0;
deposits['Mihir'][24] = 0;
deposits['Mihir'][25] = 0;
deposits['Mihir'][26] = 500;
deposits['Mihir'][27] = 0;
deposits['Mihir'][28] = 0;
deposits['Mihir'][29] = 0;
deposits['Mihir'][30] = 0;

deposits['Nitish'] = new Array(30);
deposits['Nitish'][0] = 500;
deposits['Nitish'][1] = 0;
deposits['Nitish'][2] = 0;
deposits['Nitish'][3] = 0;
deposits['Nitish'][4] = 0;
deposits['Nitish'][5] = 0;
deposits['Nitish'][6] = 0;
deposits['Nitish'][7] = 0;
deposits['Nitish'][8] = 0;
deposits['Nitish'][9] = 0;
deposits['Nitish'][10] = 0;
deposits['Nitish'][11] = 0;
deposits['Nitish'][12] = 0;
deposits['Nitish'][13] = 0;
deposits['Nitish'][14] = 0;
deposits['Nitish'][15] = 0;
deposits['Nitish'][16] = 0;
deposits['Nitish'][17] = 0;
deposits['Nitish'][18] = 0;
deposits['Nitish'][19] = 0;
deposits['Nitish'][20] = 0;
deposits['Nitish'][21] = 0;
deposits['Nitish'][22] = 300;
deposits['Nitish'][23] = 0;
deposits['Nitish'][24] = 0;
deposits['Nitish'][25] = 0;
deposits['Nitish'][26] = 0;
deposits['Nitish'][27] = 0;
deposits['Nitish'][28] = 0;
deposits['Nitish'][29] = 400;
deposits['Nitish'][30] = 0;

deposits['Rahul'] = new Array(30);
deposits['Rahul'][0] = 100;
deposits['Rahul'][1] = 0;
deposits['Rahul'][2] = 0;
deposits['Rahul'][3] = 0;
deposits['Rahul'][4] = 0;
deposits['Rahul'][5] = 0;
deposits['Rahul'][6] = 0;
deposits['Rahul'][7] = 0;
deposits['Rahul'][8] = 0;
deposits['Rahul'][9] = 0;
deposits['Rahul'][10] = 300;
deposits['Rahul'][11] = 0;
deposits['Rahul'][12] = 0;
deposits['Rahul'][13] = 0;
deposits['Rahul'][14] = 0;
deposits['Rahul'][15] = 0;
deposits['Rahul'][16] = 0;
deposits['Rahul'][17] = 0;
deposits['Rahul'][18] = 0;
deposits['Rahul'][19] = 0;
deposits['Rahul'][20] = 0;
deposits['Rahul'][21] = 0;
deposits['Rahul'][22] = 0;
deposits['Rahul'][23] = 0;
deposits['Rahul'][24] = 0;
deposits['Rahul'][25] = 0;
deposits['Rahul'][26] = 0;
deposits['Rahul'][27] = 0;
deposits['Rahul'][28] = 0;
deposits['Rahul'][29] = 0;
deposits['Rahul'][30] = 0;


deposits['Ralles'] = new Array(30);
deposits['Ralles'][0] = 1500;
deposits['Ralles'][1] = 0;
deposits['Ralles'][2] = 0;
deposits['Ralles'][3] = 0;
deposits['Ralles'][4] = 0;
deposits['Ralles'][5] = 0;
deposits['Ralles'][6] = 0;
deposits['Ralles'][7] = 0;
deposits['Ralles'][8] = 0;
deposits['Ralles'][9] = 1500;
deposits['Ralles'][10] = 0;
deposits['Ralles'][11] = 0;
deposits['Ralles'][12] = 0;
deposits['Ralles'][13] = 0;
deposits['Ralles'][14] = 1000;
deposits['Ralles'][15] = 0;
deposits['Ralles'][16] = 0;
deposits['Ralles'][17] = 0;
deposits['Ralles'][18] = 0;
deposits['Ralles'][19] = 0;
deposits['Ralles'][20] = 0;
deposits['Ralles'][21] = 0;
deposits['Ralles'][22] = 0;
deposits['Ralles'][23] = 1000;
deposits['Ralles'][24] = 0;
deposits['Ralles'][25] = 0;
deposits['Ralles'][26] = 1000;
deposits['Ralles'][27] = 0;
deposits['Ralles'][28] = 0;
deposits['Ralles'][29] = 0;
deposits['Ralles'][30] = 0;

deposits['Rishov'] = new Array(30);
deposits['Rishov'][0] = 100;
deposits['Rishov'][1] = 0;
deposits['Rishov'][2] = 0;
deposits['Rishov'][3] = 0;
deposits['Rishov'][4] = 0;
deposits['Rishov'][5] = 0;
deposits['Rishov'][6] = 0;
deposits['Rishov'][7] = 0;
deposits['Rishov'][8] = 0;
deposits['Rishov'][9] = 900;
deposits['Rishov'][10] = 0;
deposits['Rishov'][11] = 0;
deposits['Rishov'][12] = 0;
deposits['Rishov'][13] = 0;
deposits['Rishov'][14] = 0;
deposits['Rishov'][15] = 0;
deposits['Rishov'][16] = 0;
deposits['Rishov'][17] = 0;
deposits['Rishov'][18] = 500;
deposits['Rishov'][19] = 0;
deposits['Rishov'][20] = 0;
deposits['Rishov'][21] = 0;
deposits['Rishov'][22] = 0;
deposits['Rishov'][23] = 0;
deposits['Rishov'][24] = 0;
deposits['Rishov'][25] = 0;
deposits['Rishov'][26] = 0;
deposits['Rishov'][27] = 0;
deposits['Rishov'][28] = 0;
deposits['Rishov'][29] = 0;
deposits['Rishov'][30] = 0;

deposits['Selena'] = new Array(30);
deposits['Selena'][0] = 100;
deposits['Selena'][1] = 0;
deposits['Selena'][2] = 0;
deposits['Selena'][3] = 0;
deposits['Selena'][4] = 0;
deposits['Selena'][5] = 0;
deposits['Selena'][6] = 0;
deposits['Selena'][7] = 0;
deposits['Selena'][8] = 0;
deposits['Selena'][9] = 0;
deposits['Selena'][10] = 0;
deposits['Selena'][11] = 0;
deposits['Selena'][12] = 0;
deposits['Selena'][13] = 0;
deposits['Selena'][14] = 0;
deposits['Selena'][15] = 0;
deposits['Selena'][16] = 0;
deposits['Selena'][17] = 0;
deposits['Selena'][18] = 0;
deposits['Selena'][19] = 0;
deposits['Selena'][20] = 0;
deposits['Selena'][21] = 0;
deposits['Selena'][22] = 0;
deposits['Selena'][23] = 0;
deposits['Selena'][24] = 0;
deposits['Selena'][25] = 0;
deposits['Selena'][26] = 0;
deposits['Selena'][27] = 0;
deposits['Selena'][28] = 0;
deposits['Selena'][29] = 0;
deposits['Selena'][30] = 0;


deposits['Suhas'] = new Array(30);
deposits['Suhas'][0] = 250;
deposits['Suhas'][1] = 0;
deposits['Suhas'][2] = 0;
deposits['Suhas'][3] = 0;
deposits['Suhas'][4] = 0;
deposits['Suhas'][5] = 0;
deposits['Suhas'][6] = 0;
deposits['Suhas'][7] = 0;
deposits['Suhas'][8] = 0;
deposits['Suhas'][9] = 0;
deposits['Suhas'][10] = 0;
deposits['Suhas'][11] = 0;
deposits['Suhas'][12] = 0;
deposits['Suhas'][13] = 0;
deposits['Suhas'][14] = 0;
deposits['Suhas'][15] = 0;
deposits['Suhas'][16] = 0;
deposits['Suhas'][17] = 0;
deposits['Suhas'][18] = 0;
deposits['Suhas'][19] = 0;
deposits['Suhas'][20] = 0;
deposits['Suhas'][21] = 0;
deposits['Suhas'][22] = 0;
deposits['Suhas'][23] = 0;
deposits['Suhas'][24] = 0;
deposits['Suhas'][25] = 0;
deposits['Suhas'][26] = 0;
deposits['Suhas'][27] = 0;
deposits['Suhas'][28] = 500;
deposits['Suhas'][29] = 0;
deposits['Suhas'][30] = 0;


deposits['Taiway'] = new Array(30);
deposits['Taiway'][0] = 200;
deposits['Taiway'][1] = 0;
deposits['Taiway'][2] = 0;
deposits['Taiway'][3] = 0;
deposits['Taiway'][4] = 0;
deposits['Taiway'][5] = 0;
deposits['Taiway'][6] = 0;
deposits['Taiway'][7] = 0;
deposits['Taiway'][8] = 0;
deposits['Taiway'][9] = 0;
deposits['Taiway'][10] = 0;
deposits['Taiway'][11] = 0;
deposits['Taiway'][12] = 0;
deposits['Taiway'][13] = 0;
deposits['Taiway'][14] = 300;
deposits['Taiway'][15] = 0;
deposits['Taiway'][16] = 0;
deposits['Taiway'][17] = 0;
deposits['Taiway'][18] = 0;
deposits['Taiway'][19] = 0;
deposits['Taiway'][20] = 0;
deposits['Taiway'][21] = 0;
deposits['Taiway'][22] = 500;
deposits['Taiway'][23] = 0;
deposits['Taiway'][24] = 0;
deposits['Taiway'][25] = 0;
deposits['Taiway'][26] = 0;
deposits['Taiway'][27] = 0;
deposits['Taiway'][28] = 0;
deposits['Taiway'][29] = 0;
deposits['Taiway'][30] = 0;


history = new Array(31);
history[0] = 30600;
history[1] = 30603.86;
history[2] = 30587.94;
history[3] = 30592;
history[4] = 30585.392;
history[5] = 30592.8522;
history[6] = 30581.6306;
history[7] = 30500;
history[8] = 30556.825;
history[9] = 30452.877;
history[10] = 30447.877;
history[11] = 30435.577;
history[12] = 30485.087;
history[13] = 30420.1883;
history[14] = 30502.618;
history[15] = 30546.8325;
history[16] = 30622.6626;
history[17] = 30692.412;
history[18] = 30654.903;
history[19] = 30767.353;
history[20] = 30735.0089;
history[21] = 30786.3589;
history[22] = 30969.109;
history[23] = 30947.2199;
history[24] = 30920.159;
history[25] = 30980.189;
history[26] = 30988.526;
history[27] = 31096.631;
history[28] = 30936.631;
history[29] = 30872.334;
history[30] = 30728.835;

function print(s) {
	console.log(s);
}

function sum(lst) {
	var total = 0;
	for (member in lst) {
		total += lst[member];
	}
	return total;
}

// Investors who lose money stay at 0 until net_profit dips below 0
function model1(net_profit) {
	for (member in profits) {
		var d = profits[member] - losses[member];
		if (d > 0) {
			returns[member] = d;
		} else {
			returns[member] = 0;
		}
	}
	var tot = sum(returns);
	for (member in profits) {
		returns[member] = returns[member] / tot * net_profit;
	}

	console.log(returns);
}

// distributes excess profit to everyone in proportion to their pure profits
// og algorithm but fixed (i think) (kinda)
function model2(net_profit) {
	var total = sum(profits);
	for (member in profits) {
		returns[member] = net_profit * (profits[member] - losses[member]) / total;
	}
	var bank = net_profit - sum(returns)
	for (member in profits) {
		returns[member] += bank * (profits[member] / total);
	}
	console.log(returns)
}

// model2 but squared
function model3(net_profit) {
	var total = sum(profits);
	var total2 = sum(losses);
	for (member in profits) {
		var profit_perc = profits[member] * profits[member] / total;
		var loss_perc = losses[member] / total2;
		returns[member] = (profit_perc - loss_perc);
	}
	var x = sum(returns)
	for (member in profits) {
		returns[member] = returns[member] / x * net_profit;
	}
	console.log(returns)
}

function calc_profits(total_deposits) {
	var final = history[current_week]
	var net_profit = final - total_deposits

	for (i = 0; i <= current_week; i++) {
		var curr = history[i];
		var diff = (final - curr)

		for (member in profits) {
			if (diff >= 0) {
				profits[member] += diff * deposits[member][i];
			}
			else {
				losses[member] += Math.abs(diff * deposits[member][i]);
			}
		}
	}
	console.log('net profit ' + net_profit);

	model1(net_profit)

	model2(net_profit)

	model3(net_profit)

}

total_deposits = 0;
for (week = 0; week < current_week; week++) {
		// Process deposits
	for (member in deposits) {
		total_deposits += deposits[member][week];
	}
}

print('total deposits')
print(total_deposits)
calc_profits(total_deposits)
print()