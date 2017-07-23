import csv

sectors = ["BasicIndustries.csv",
"CapitalGoods.csv",
"ConsumerGoods.csv",
"ConsumerServices.csv",
"Energy.csv",
"ETFS.csv",
"Finance.csv",
"Healthcare.csv",
"Misc.csv",
"Tech.csv",
"Transportation.csv",
"Utilities.csv"]

exchanges = ["nasdaq.csv",
"nyse.csv",
"amex.csv"]

stocks = []

def read():
	for i in exchanges:
		with open(i) as csvfile:
			reader = csv.reader(csvfile)
			for row in reader:
				stocks.append(row)

def shorten():
	for i in range(len(stocks)):
		stocks[i] = stocks[i][:2] + stocks[i][5:8]
		
def write():
	with open('all_stocks.csv', 'w') as csvfile:
		writer = csv.writer(csvfile)
		for row in stocks:
			writer.writerow(row)
read()
shorten()
write()

