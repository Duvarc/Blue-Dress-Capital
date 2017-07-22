import csv

sectors = ["BasicIndustries.csv",
"CapitalGoods.csv",
"ConsumerGoods.csv",
"Energy.csv",
"ETFS.csv",
"Finance.csv",
"Healthcare.csv",
"Miscellaneous.csv",
"Technology.csv",
"Transportation.csv",
"Utilities.csv"]
stocks = []

for i in sectors:
	with open(i) as csvfile:
		reader = csv.reader(csvfile)
		for row in reader:
			stocks.append(row)

with open('all_stocks.csv', 'w') as csvfile:
	writer = csv.writer(csvfile)
	for row in stocks:
		writer.writerow(row)


