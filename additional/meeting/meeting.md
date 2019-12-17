Meeting
https://www.codewars.com/kata/meeting/train/javascript

John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.


s = "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"

output = "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)"

s = "John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell"

output = "(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)(DORRIES, PAUL)(GATES, JOHN)(KERN, ANN)(KORN, ANNA)(META, ALEX)(RUSSEL, ELIZABETH)(STEVE, LEWIS)(WAHL, MICHAEL)"

"Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern"

output = "(ARNO, ALEX)(ARNO, HALEY)(BELL, SARAH)(CORNWELL, ALISSA)(DORNY, PAUL)(DORRIES, ANDREW)(KERN, ANN)(KERN, MADISON)"


Catherine's pseudocode:
input: string
  - names => capitalized strings
  - separators
    - : separator => first name, last name
    - ; separator => different friends

output: string
  - names will be uppercase
  - format will be (lastName, firstName)
  - no separator between different friends names
  - names have to be sorted
    - alphabetical order
    - by last name first
    - if last name is the same
      - sort by first name

edge case:
  - the same first name + last name can be repeated
  - in that case all occurences should be kept

ideas:
  - first separate on the ; => I get each friend
    ['Fred:Corvill', 'Wilfred:Corwill' ...]
  - ['Fred', 'Corvill'], ['Wilfred', 'Corwill']
  - do the sorting first
  - then use map to format each friend's name

algorithm:
  - initialize a variable names
  - split my input on ; separator => array of strings
  - use map on that array to transform it
    - 'Fred:Corvill' => [ 'Fred', 'Corwill' ]
    - for each string split with ':'
  - sorting the friends
    - call sort on the names array
    - for each element use name[1] (i.e. the last name) to sort

    names.sort((a, b) => {
      if (a[1] < b[1]) {
        -1
      } else if (a[1] > b[1]) {
        ....
      } else {
        if (a[0] < a[0]) {
          ...
        }
      }
    })

  - use map to transform the sorted names array
    - ['Fred', 'Corwill'] => '(CORWILL, FRED)'
    - use string interpolation ``
    - `(${name[1].toUpperCase()}, ....`
  - call join and return
