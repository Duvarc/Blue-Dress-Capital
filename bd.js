var portfolio = {'KLAC': 0, 'LRCX': 0, 'ADI': 0, 'ACN': 0, 'cash': 0};
var deposits = {'hung-wei': [100, 0, 200, 500], 'suhas': [500, 100, 100, 100], 'ralles': [1000, 1000, 500, 1000]};
var profits = {'hung-wei': 0, 'suhas': 0, 'ralles': 0}
var prices = {'KLAC': [96, 93, 92, 97], 'LRCX': [149, 142, 139, 154], 'ADI': [77, 76, 75, 80], 'ACN': [100, 80, 70, 110]};

// [Week open at 9:30 am, Week close at 4pm] for more accurate information
var week_mappings = {1: ["6/26/17", "6/30/17"], 2: ["7/3/17", "7/7/17"]}
var current_week = 4;

// Historical portfolio snapshots - weekly
var history = [0, 0, 0, 0];
// Normalized portfolio history - weekly
var history_norm = [0, 0, 0, 0];

var total_deposits = 0;

function stock_price(stock, week=current_week) {
	return prices[stock][week-1]
}
// Get portfolio value
function value(port=portfolio, week=current_week) {
	s = 0;
	for (stock in port) {
		if (stock == 'cash') {
			s += port[stock];
		}
		else {
			s += portfolio[stock] * stock_price(stock, week);
		}
	}
	return s;
}
function deposit(name, amount, week=current_week) {
	portfolio['cash'] += amount;
	return amount;
}
function add_stock(stock, amount, week=current_week) {
	if (!(stock in portfolio)) {
		portfolio[stock] = 0;
	}
	portfolio[stock] += amount;
	portfolio['cash'] -= (amount * stock_price(stock, week));
}
// Sum of deposits in a specified week
function sum_deposits(week=current_week) {
	s = 0;
	for (member in deposits) {
		s += deposits[member][week];
	}
	return s;
}
// Cummulative sum of deposits up to specified week
function cum_deposits(week=current_week) {
	s = 0;
	for (i = 0; i < week; i++) {
		s += sum_deposits(i);
	}
	return s;
}
function update_history(portfolio, week=current_week) {
	history[week-1] = value(portfolio, week);
}
function normalize_deposits(total) {
	for (i = 1; i <= history.length; i++) {
		var diff = total - cum_deposits(i);
		history_norm[i-1] = diff + history[i-1];
	}
}
function calc_profits() {
	var final = history[current_week-1];
	var net_profit = final - total_deposits;

	for (i = 0; i < current_week; i++) {
		var curr = history_norm[i];
		var diff = final - curr;
		var total = 0;

		for (member in profits) {
			profits[member] += diff * deposits[member][i];
			total += profits[member];
		}
	}
	console.log('net profit ' + net_profit);
	console.log(total)
	for (member in profits) {
		profits[member] = net_profit * profits[member] / total;
	}
}

function run() {
	// Running loop from week 0 to current week
	for (week = 1; week <= current_week; week++) {
		// Process deposits
		for (member in deposits) {
			total_deposits += deposit(member, deposits[member][week-1]);
		}

		// Purchase stock
		add_stock('KLAC', 1, week);
		add_stock('ADI', 1, week);

		// Update portfolio history with this week's snapshot
		update_history(portfolio, week);
	}
	console.log(portfolio);
	// Similar to robinhood
	normalize_deposits(total_deposits);
	console.log(history_norm);

	calc_profits();

	console.log(profits);
}

run()