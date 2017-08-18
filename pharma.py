import csv
import re
from string import digits

class Company():
	def __init__(self, name, alts=[], drugs=[]):
		self.name = name
		self.alts = alts
		self.drugs = drugs
	def __str__(self):
		return self.name + "\n[" + ', '.join(self.alts) + "]"

class Drug():
	def __init__(self, brand, generic, form, strength, refD, refS, numA, numP, sponsor=""):
		self.brand = brand
		self.generic = generic
		self.form = form
		self.strength = strength
		self.refD = refD
		self.refS = refS
		self.numA = numA
		self.numP = numP
		self.sponsor = sponsor

	def __str__(self):
		return self.brand
	def info(self):
		return self.brand + " (" + self.generic + ")" + "\n" + self.sponsor + "\n[" +  ' '.join(self.form) + "]\n" + "[" + ' '.join(self.strength) + "]\n"
	def __repr__(self):
		return self.brand

def drug_delimiters(lst):
	s = ""
	for i in lst:
		s += "\\b" + i.upper() + "\\b|"
	return s[:-1]

pharma = set()
drugs = {}
drugs2 = {}
comp = {}
alts = {}

def info(x):
	x = x.upper()
	if x in drugs2:
		for i in drugs2[x]:
			print(i.info())
	elif x in drugs:
		print(drugs[x].info())
	elif x in alts:
		c = comp[alts[x.upper()]]
		print(c)
		print()
		print("Drugs:")
		print(c.drugs)
		print()

def company_drugs(company):
	for d in comp[alts[company.upper()]].drugs:
		print(d)

with open('drugsatfda/Applications.txt', 'r') as f2:
	reader = csv.reader(f2, delimiter='\t')
	for row in reader:
		pharma.add(row[3])

temp = set()
for p in pharma:
	extra = ["PHARMS", "PHARM", "PHARMA", "AND CO", "INC", "LLP", "ONCOLOGY", "CORP", "ON", " HEALTH", "LLC",
	"HOLDINGS", "INTL", "LABS", "IDEC", "SCIENCES", "CONSUMER", "COMPANY", "US", "UK", "LTD"]
	extra2 = ["(UK)", "(US)", "(USA)", "(us)", "(uk)"]
	if " " in p and len(p.split()[0]) > 2:
		for e in extra:
			# if e in p:
			# 	index = re.search(e, p)
			# 	s = p[:index.start()].strip()
			# 	temp.add(s)
			# if ' CO' in p and 'AND CO' not in p:
			# 	index = re.search('CO', p)
			# 	s = p[:index.start()].strip()
			# 	temp.add(s)
			# if ' US' in p and '(US)' not in p:
			# 	index = re.search('US', p)
			# 	s = p[:index.start()].strip()
			# 	temp.add(s)
			# if ' UK' in p and '(UK)' not in p:
			# 	index = re.search('UK', p)
			# 	s = p[:index.start()].strip()
			# 	temp.add(s)
			# if ' USA' in p and '(USA)' not in p:
			# 	index = re.search('USA', p)
			# 	s = p[:index.start()].strip()
			# 	temp.add(s)
			index = re.search("\\b" + e + "\\b", p)
			if index:
				s = p[:index.start()].strip()
				temp.add(s)
		for e in extra2:
			index = re.search(e, p)
			if index:
				s = p[:index.start()].strip()
				temp.add(s)

for p in temp:
	pharma.add(p)

while pharma:
	m = min(pharma, key=lambda x : len(x))
	if len(m) <= 1:
		pharma.remove(m)
		continue
	alts[m] = m
	comp[m] = Company(m, [], [])
	for c in pharma:
		case1 = " " in m and m in c
		case2 = " " not in m and m in re.split('[- ]', c) and c not in comp[m].alts
		if (case1 or case2) and m != c:
		# if (a in c or b in c) and c not in comp[m].alts and m != c:
			comp[m].alts.append(c)
			alts[c] = m
	for c in comp[m].alts:
		pharma.remove(c)
	if m in pharma:
		pharma.remove(m)

fedString = " **Federal Register determination that product was not discontinued or withdrawn for safety or efficacy reasons**"
with open('drugsatfda/Products.txt', 'r') as f1, open('drugsatfda/Applications.txt', 'r') as f2:
	reader = csv.reader(f1, delimiter='\t')
	reader2 = csv.reader(f2, delimiter='\t')
	next(reader)
	apps = next(reader2)
	for row in reader:
		brand,generic = row[5], row[6]
		# brand = re.sub("\d+", "", brand).strip()
		index = re.search("\d", brand)
		if index:
			brand = brand[:index.start()].strip()

		strength = row[3].replace(fedString, '').strip()
		arr = strength.split(';')
		strength = list(set(arr))

		numA = row[0]
		if brand not in drugs:
			#apps = next(reader2)
			while apps[0] != numA:
				apps = next(reader2)
			sponsor = alts[apps[3]]
			d = Drug(brand, generic, [row[2]], strength, row[4], row[7], numA, row[1], sponsor)
			drugs[brand] = d

			delim = [";", "AND"]
			modifiers = ["HYDROCHLORIDE"]
			# ";|\\band\\b"

			ingredients = re.split(drug_delimiters(delim), generic)
			for i in ingredients:
				if i:
					if i in drugs2 and d not in drugs2[i]:
						drugs2[i].append(d)
					else:
						drugs2[i] = [d]

					for m in modifiers:
						index = re.search("\\b" + m + "\\b", i)
						if index:
							s = i[:index.start()].strip()
							if s in drugs2 and d not in drugs2[s]:
								drugs2[s].append(d)
							else:
								drugs2[s] = [d]
			# if sponsor not in comp:
			# 	comp[sponsor] = set()
			# comp[sponsor].add(d)
			comp[sponsor].drugs.append(d)
		else:
			f = row[2]
			if f not in drugs[brand].form:
				drugs[brand].form.append(f)
			if strength[0] not in drugs[brand].strength:
				drugs[brand].strength.extend(strength)


for d in drugs:
	drugs[d].strength.sort()

info('opdivo')
info('vyvanse')
info('velphoro')
info('oxycodone hydrochloride')
info('adderall')

# company_drugs('GILEAD')
info('J AND J')
info('Bristol')
