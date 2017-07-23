import copy

# Lists correspond to each week. Index 0 = week 1, etc.
stocks_history = {'KLAC': [96, 93, 92, 97], 'LRCX': [149, 142, 139, 154], 'ADI': [77, 76, 75, 80], 'ACN': [100, 80, 70, 110]};
deposit_history = {'hw': [100, 0, 200, 500], 'suhas': [500, 100, 100, 100], 'ralles': [1000, 1000, 500, 1000]};
purchase_history = []
cash_history = []

profits = {'hw': 0, 'suhas': 0, 'ralles': 0}
bdc_portfolio = {'KLAC': 0, 'LRCX': 0, 'ADI': 0, 'ACN': 0, 'cash': 0}
history_extended = []
history = []
history_norm = []
portfolio_derivatives = []
total_deposits = [0]

curr_week = 4
opt = 2
simplex = 0.30398

def get_portfolio(week_num):
	return history[week_num - 1]

def update_history(port):
	history_extended.append(copy.deepcopy(port))
	history.append(sum_portfolio(port, len(history_extended)))

def get_history(week_num):
	return history[week_num - 1]

def get_history_extended(week_num):
	return history_extended[week_num - 1]

def get_price(name, week_num):
	if name == 'cash':
		return 1
	return stocks_history[name][week_num - 1]

def get_deposit(name, week_num):
	return deposit_history[name][week_num - 1]

def get_cash():
	return bdc_portfolio['cash']

def portfolio_value(week_num):
	return sum_portfolio(bdc_portfolio, week_num)

def invest(amount, week_num):
	budget = amount
	while budget > 0:
		for stock in bdc_portfolio:
			cost = get_price(stock, week_num)
			if cost <= budget:
				add_stock(stock, 1, week_num)
				budget -= cost
			if budget <= 0:
				cash_history.append(amount - budget)
				return

def deposit(amount):
	bdc_portfolio['cash'] += amount

def deposit_all(week):
	total = sum_deposits(week)
	bdc_portfolio['cash'] += total
	return total

def sum_deposits(week):
	return sum(deposit_history[x][week-1] for x in deposit_history)

def cum_deposits(week):
	return sum(sum_deposits(x) for x in range(week))

def add_stock(name, amount, week):
	if name in stocks_history:
		bdc_portfolio[name] += amount
		bdc_portfolio['cash'] -= amount * get_price(name, week)

def sum_portfolio(port, week):
	return sum(port[x] * get_price(x, week) for x in port)

def portfolio_norm(week):
	return history_norm[week-1]

def back_calculate(total):
	total_deposits[0] = total
	for i in range(1, curr_week + 1):
		diff = total - cum_deposits(i)
		history_norm.append(diff + history[i-1])

def calculate_profits():
	net_profit = history_norm[-1] - total_deposits[0]
	budget = net_profit
	print("net profits: " + str(net_profit))
	final = history_norm[-1]
	for i in range(1, curr_week):
		curr = portfolio_norm(i)
		diff = (final - curr)
		for member in profits:
			profits[member] += diff * get_deposit(member, i)

	whole = sum(profits.values())
	for member in profits:
		profits[member] = net_profit * profits[member] / whole

	print(profits)



def run():
	deposits = 0
	for week in range(1, curr_week + 1):
		deposits += deposit_all(week)
		invest(get_cash(), week)
		update_history(bdc_portfolio)
	back_calculate(deposits)
	print(history_norm)
	calculate_profits()



run()
