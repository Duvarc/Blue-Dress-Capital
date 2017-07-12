import copy
import scipy.integrate
import scipy.special

# Lists correspond to each week. Index 0 = week 1, etc.
stocks_history = {'KLAC': [96, 93, 92, 97], 'LRCX': [149, 142, 139, 154], 'ADI': [77, 76, 75, 80], 'ACN': [100, 80, 70, 110]}
deposit_history = {'hw': [500, 500, 500, 0], 'suhas': [1000, 500, 100, 0], 'ralles': [1500, 2000, 1000, 0]}
purchase_history = []
cash_history = []

profits = {'hw': 0, 'suhas': 0, 'ralles': 0}
bdc_portfolio = {'KLAC': 0, 'LRCX': 0, 'ADI': 0, 'ACN': 0, 'cash': 0}
portfolio_history_extended = []
portfolio_history = []
portfolio_history_normalized = []
portfolio_derivatives = []
total_deposits = [0]

final_week = 4
opt = 2
simplex = 0.30398

def get_portfolio(week_num):
	return portfolio_history[week_num - 1]

def update_portfolio_history(port):
	portfolio_history_extended.append(copy.deepcopy(port))
	portfolio_history.append(sum_portfolio(port, len(portfolio_history_extended)))

def get_portfolio_history(week_num):
	return portfolio_history[week_num - 1]

def get_portfolio_history_extended(week_num):
	return portfolio_history_extended[week_num - 1]

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

def deposit_all(week_num):
	total = sum_deposits(week_num)
	bdc_portfolio['cash'] += total
	return total

def sum_deposits(week_num):
	return sum(deposit_history[x][week_num-1] for x in deposit_history)

def add_stock(name, amount, week_num):
	if name in stocks_history:
		bdc_portfolio[name] += amount
		bdc_portfolio['cash'] -= amount * get_price(name, week_num)

def sum_portfolio(port, week_num):
	return sum(port[x] * get_price(x, week_num) for x in port)

def portfolio_norm(week_num):
	return portfolio_history_normalized[week_num-1]

def back_calculate(total):
	total_deposits[0] = total
	for i in range(1, final_week + 1):
		p = portfolio_history_extended
		diff = total - sum(sum_deposits(x) for x in range(1, i+1))
		portfolio_history_normalized.append(diff + portfolio_history[i-1])

def calculate_profits():
	net_profit = portfolio_history_normalized[-1] - total_deposits[0]
	print("net profits: " + str(net_profit))
	final = portfolio_history_normalized[-1]
	for i in reversed(range(1, final_week)):
		# final = portfolio_norm(i+1)
		curr = portfolio_norm(i)
		diff = (final - curr) / 1
		print(diff)
		for member in profits:
			profits[member] += diff * (get_deposit(member, i) / sum_deposits(i))
		whole = sum(profits.values())
		for member in profits:
			bessel_func = scipy.integrate.quad(lambda x: scipy.special.jv(opt,x), 0, 4.5)
			profits[member] = net_profit * profits[member] / whole * (bessel_func[0] - simplex)

	print(profits)




def run():
	deposits = 0
	for week in range(1, final_week + 1):
		deposits += deposit_all(week)
		invest(get_cash(), week)
		update_portfolio_history(bdc_portfolio)
	back_calculate(deposits)
	print(portfolio_history_normalized)
	calculate_profits()



run()






