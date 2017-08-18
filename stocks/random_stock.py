import csv
import random

stocks = []

with open('all_stocks.csv') as csvfile:
	reader = csv.reader(csvfile)
	for row in reader:
		stocks.append(row)

def pick_random(year='d', sector='d', industry='d'):
	lst = stocks
	if year != 'd':
		lst = list(filter(lambda x: x[2] == year, lst))
	if sector != 'd':
		lst = list(filter(lambda x: x[3] == sector, lst))
	if industry != 'd':
		lst = list(filter(lambda x: x[4] == industry, lst))
	return random.choice(lst)

def random_portfolio(year='d', sector='d', industry='d', size=15):
	return [pick_random(year, sector, industry) for i in range(size)]

def print_port(year='d', sector='d', industry='d', size=15):
	for i in random_portfolio(year, sector, industry, size):
		print(i)

# print(pick_random(sector='Finance', industry='Major Banks'))
# print(pick_random())
print_port()


