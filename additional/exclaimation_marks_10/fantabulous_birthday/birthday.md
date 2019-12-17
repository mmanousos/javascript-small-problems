Fantabulous Birthday
https://www.codewars.com/kata/fantabulous-birthday/train/javascript

Fibsieve had a fantabulous (yes, it's an actual word) birthday party this year. 
He had so many gifts that he was actually thinking of not having a party next 
year.

Among these gifts there was an N x N glass chessboard that had a light in each 
of its cells. When the board was turned on a distinct cell would light up every 
second, and then go dark.

The cells would light up in the sequence shown in the diagram. Each cell is 
marked with the second in which it would light up:

column
1   2   3   4   5

25  24  23  22  21  5
10  11  12  13  20  4
9   8   7   14  19  3
2   3   6   15  18  2
1   4   5   16  17  1 row

In the first second the light at cell (1, 1) would be on. And in the 5th second 
the cell (3, 1) would be on. Now Fibsieve is trying to predict which cell will 
light up at a certain time (given in seconds).

Output: (x, y) - the column and the row number of a cell which would light up at 
the N'th second.

Notes
Column and row indices are 1-based.
x is the column index, and y is the row index.
The cells are indexed from bottom-left corner.
N will be large.

