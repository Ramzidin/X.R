# n, m, x = map(int,(input().split()))
# a, b = input().split(), 0
# for i in range(len(a)):
# 	for j in range(len(a)):
# 		if i < j and int(a[i]) * int(a[j]) % m == x: b += 1
# print(b)

# n, d = map(int, input().split())
# a = input().split()
# o = 0
# for i in range(len(a)):
#   for j in range(len(a)):
#     for k in range(len(a)):
#       if i < j < k and int(a[j]) - int(a[i]) == int(a[k]) - int(a[j]) == d:
#         o += 1
# print(o)


# n = int(input())
# a = (0) * n
# for i in range(n):
#   b = int(input())
#   a[i] = b
# a.sort()
# for i in range(len(a)):
#   print(a[i])


# n = int(input())
# a = input().split()
# q, b = [], 0
# for i in range(len(a)):
# 	if not(a[i] in q):
# 		q.append(a[i])
# 		c = a.count(a[i])
# 		if c % 2 == 0:
# 			b += c / 2
# 		elif c % 2 != 0:
# 			b += (c - 1) / 2
# print(int(b))

# n, k, m = map(int, input().split())
# print((n-1) // 2 + (m-1) // 2 + (k-1) // 2 + 3)


# n, m, k = map(int, input().split())
# n1, m1, k1 = map(int, input().split())
# a = (n1 * 60 + m1) * 60 + k1
# b = (n * 60 + m) * 60 + k
# print(a - b)


# n = int(input())
# h = n // 3600
# m = f'{n // 60 - h * 60}'
# s = f'{n % 60}'
# if h > 24:
# 	h = h % 24
# if len(m) == 1:
# 	m = f'0{m}'
# if len(s) == 1:
# 	s = f'0{s}'
# print(f'{h}:{m}:{s}')

# import math
# n, a, b = map(int, input().split())
# arreyNumbers = [0] * n
# for i in range(n):
#   arreyNumbers[i] = int(input())
# d = math.sqrt(a**2 + b**2)
# for i in arreyNumbers:
# 	if i <= d:
# 		print('BOX')
# 	else:
# 		print('TRASH')


# n, m, a, b = map(int, input().split())
# pp = [0] * n
# for i in range(n):
# 	pp[i] = input()

# for i in pp:
# 	row = ''
# 	for j in range(len(i)):
# 		row += i[j] * b
# 	row += '\n'
# 	row *= a
# 	pp[pp.index(i)] = row

# image = ''
# for i in pp:
# 	image += i

# print(image)


# n = input()
# answer = 'YES'
# if len(n) > 1:
# 	for i in range(len(n)-1):
# 	  if n[i] == '0':
# 	    if n[i+1] != '8':
# 	      answer = 'NO'	
# 	      break
# 	  elif n[i] == '1':
# 	    if n[i+1] != '4' and n[i+1] != '2':
# 	      answer = 'NO'
# 	      break
# 	  elif n[i] == '2':
# 	    if n[i+1] != '1' and n[i+1] != '3' and n[i+1] != '5':
# 	      answer = 'NO'
# 	      break
# 	  elif n[i] == '3':
# 	    if n[i+1] != '2' and n[i+1] != '6':
# 	      answer = 'NO'
# 	      break
# 	  elif n[i] == '4':
# 	    if n[i+1] != '1' and n[i+1] != '5' and n[i+1] != '7':
# 	      answer = 'NO'
# 	      break
# 	  elif n[i] == '5':
# 	    if n[i+1] != '2' and n[i+1] != '4' and n[i+1] != '6' and n[i+1] != '8':
# 	      answer = 'NO'
# 	      break
# 	  elif n[i] == '6':
# 	    if n[i+1] != '3' and n[i+1] != '5' and n[i+1] != '9':
# 	      answer = 'NO'
# 	      break
# 	  elif n[i] == '7':
# 	    if n[i+1] != '8' and n[i+1] != '4':
# 	      answer = 'NO'
# 	      break
# 	  elif n[i] == '8':
# 	    if n[i+1] != '5' and n[i+1] != '7' and n[i+1] != '9' and n[i+1] != '0':
# 	      answer = 'NO'
# 	      break
# 	  elif n[i] == '9':
# 	    if n[i+1] != '8' and n[i+1] != '6':
# 	      answer = 'NO'
# 	      break
# print(answer)


# n, k = map(int, input().split())
# dp = [[0 for _ in range(k + 2)] for _ in range(n + 2)]
# mod = 10 ** 9 + 7
# for i in range(n + 1):
#     sum = 0
#     for j in range(k + 1):
#         if i == 0:
#             continue
#         sum += dp[i - 1][j]
#         if j == 0:
#             dp[i][0] = 1
#             continue
#         if j - i >= 0:
#             sum -= dp[i - 1][j - i]
            
#         dp[i][j] = sum % mod
        
        
# dp = [[0 for _ in range(5)] for _ in range(10)]
# print(dp[n][k])
# print(dp)

# n = int(input())
# a = input().split()
# a.sort()
# text = ''
# for i in range(n):
#   text += f'{a[i]} '
  
# print(text)

def find_unique_submatrices(N, M, matrix):
    row_counts = [0] * N
    col_counts = [0] * M

    for i in range(N):
        for j in range(M):
            row_counts[i] += matrix[i][j]
            col_counts[j] += matrix[i][j]

    unique_submatrices = 0

    for i in range(N):
        for j in range(M):
            if row_counts[i] == matrix[i][j] or col_counts[j] == matrix[i][j]:
                unique_submatrices += 1

    return unique_submatrices


# Kiruvchi ma'lumotlar
N, M = map(int, input().split())
matrix = []
for _ in range(N):
    row = list(map(int, input().split()))
    matrix.append(row)

# Dasturni ishga tushiramiz
result = find_unique_submatrices(N, M, matrix)

# Chiquvchi ma'lumotlar
print(result)

# def find_ways(target):
#     ways = []
    
#     def backtrack(expression, current_num, remaining_nums):
#         if not remaining_nums:
#             if eval(expression) == target:
#                 ways.append(expression)
#             return
        
#         next_num = remaining_nums[0]
#         remaining_nums = remaining_nums[1:]
        
#         backtrack(expression + "+" + str(next_num), next_num, remaining_nums)
#         backtrack(expression + "-" + str(next_num), -next_num, remaining_nums)
#         backtrack(expression + str(next_num), int(str(current_num) + str(next_num)), remaining_nums)
    
#     backtrack("1", 1, list(range(2, 10)))
    
#     return ways


# # Foydalanuvchi tomonidan son kiritishni so'raymiz
# target_number = int(input("Istalgan sonni kiriting (1-123456789): "))

# # Yuqoridagi dasturni ishga tushiramiz
# results = find_ways(target_number)

# # Natijalarni chiqaramiz
# if results:
#     print(f"{target_number} ni hosil qilish uchun {len(results)} xil usul mavjud:")
#     for i, result in enumerate(results):
#         print(f"{i+1}. {result} = {target_number}")
# else:
#     print("Bu sonni hosil qilish uchun usul topilmadi.")	

# n, q = map(int,input().split())
# a = [0] * n
# for i in range(q):
# 	try:
# 		t, s, e, l = input().split()
# 	except:
# 		t = 2
# 	if int(t) == 1:
# 		a1 = a[:int(s) - 1]
# 		a2 = [int(l)] * (int(e) - int(s) + 1)
# 		a3 = a[int(e):]
# 		a = a1 + a2 + a3
# 	elif t == 2:
# 		b = a.copy()
# 		b.sort()
# 		counter = b.count(b[0])
# 		print(counter)
		