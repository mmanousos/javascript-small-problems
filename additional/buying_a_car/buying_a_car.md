Let us begin with an example:

A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases by 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.

Can you help him?

How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?

Parameters and return of function:

parameter (positive int or float, guaranteed) startPriceOld (Old car price)
parameter (positive int or float, guaranteed) startPriceNew (New car price)
parameter (positive int or float, guaranteed) savingperMonth 
parameter (positive float or int, guaranteed) percentLossByMonth

Problem
In: four values 
- start price of the old car
- start price of the new car
- savings per month
- percent loss by month

Out: two values
- number of months until we can buy the new car
- how much money will be left after purchasing the car (total savings - current cost of car)

Rules: 
every 2 months, the percent of loss increases by .5 percent 
so at month 3, the percent of loss is 2;
   at month 5, 2.5

Notes: 
If value of old car is >= to new car, then immediately return

Assumptions: 
Value of old car is being tracked for depreciation because that value counts toward the cost of the new car
so ability to purchase = current savings + current value of old car vs current value of new car

Approach Brainstorming: 
tracker for month
total toward purchase = old car + savings
while total toward purchase <= new car 
  loop 
    add 1000 to savings
    if month tracker is even, increase percentage by .5
    reduce value of old car by percentage
    reduce value of new car by percentage
    increase month tracker += 1
return [tracker, total toward purchase - new car]

Example / Tests 
nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)


nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)
where 6 is the number of months at the end of which he can buy the new car and 766 is the nearest integer to 766.158 (rounding 766.158 gives 766).

Note:
Selling, buying and saving are normally done at end of month. Calculations are processed at the end of each considered month but if, by chance from the start, the value of the old car is bigger than the value of the new one or equal there is no saving to be made, no need to wait so he can at the beginning of the month buy the new car:

nbMonths(12000, 8000, 1000, 1.5) should return [0, 4000]
nbMonths(8000, 8000, 1000, 1.5) should return [0, 0]

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
  //your code here
}

We don't take care of a deposit of savings in a bank:-)