def printMultiplicationTable():
    for i in range(1, 11):
        row = ""
        for j in range(1, 11):
            row += str(i * j) + "\t"
        print(row)

printMultiplicationTable()
