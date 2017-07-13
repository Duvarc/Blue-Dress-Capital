var portfolio = {'KLAC': 1, 'LRCX': 0, 'ADI': 0, 'ACN': 0, 'cash': 0};
var deposits = {'hung-wei': [100, 0, 200, 500], 'suhas': [500, 100, 100, 100], 'ralles': [1000, 1000, 500, 1000]};
var profits = {};

// [Week open at 9:30 am, Week close at 4pm] for more accurate information
var week_mappings = {1: ["6/26/17", "6/30/17"], 2: ["7/3/17", "7/7/17"]}
var current_week = 4;

// Historical portfolio snapshots - weekly
var history = [];
// Normalized portfolio history - weekly
var history_norm = [];

var total_deposits = 0;

function stock_price(stock, week=current_week) {
	// Fill in (finance api)
}
// Get portfolio value
function value(port=portfolio, week=current_week) {
	s = 0;
	for (stock in port) {
		if (port[stock] != 'cash') {
			s += portfolio[stock] * stock_price(stock, week);
		}
	}
	return s;
}
function deposit(name, amount, week=current_week) {
	portfolio['cash'] += amount;
	deposits[name][week-1] = amount;
	return amount;
}
function add_stock(stock, amount, week=current_week) {
	if (!(stock in portfolio)) {
		portfolio[stock] = 0;
	}
	portfolio[stock] += amount;
	bdc_portfolio['cash'] -= amount * stock_price(stock, week);
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
	for (i = 1; i < week; i++) {
		for (member in deposits) {
			s += deposits[member][i];
		}
	}
	return s;
}
function update_history(portfolio, week=current_week) {
	history[week] = value(portfolio, week)
}
function normalize_deposits(total) {
	for (i = 1; i < history.length; i++) {
		var diff = total - cum_deposits(i);
		history_norm[i] = diff + history[i];
	}
}
function calc_profits() {
	var final = history[current_week]
	var net_profit = final - total_deposits

	for (i = 1; i < current_week; i++) {
		var curr = history_norm[i];
		var diff = final - curr;
		var total = 0;

		for (member in profits) {
			profits[member] += diff * deposits[member][i];
			total += profits[member];
		}

		for (member in profits) {
			profits[member] = net_profit * profits[member] / whole;
		}
	}
}

function run() {
	// Running loop from week 0 to current week
	for (week = 1; week < current_week; week++) {
		// Process deposits
		total_deposits += deposit('sample', 100, week);
		total_deposits += deposit('sample2', 100, week);

		// Purchase stock
		add_stock('test_stock', 3, week);
		add_stock('test_stock2', 2, week);

		// Update portfolio history with this week's snapshot
		update_history(portfolio, week);
	}

	// Similar to robinhood
	normalize_deposits(total_deposits);

	calc_profits();

	console.log(profits);
}