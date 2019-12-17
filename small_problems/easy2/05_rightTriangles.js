// Right Triangles
// Write a function that takes a positive integer, n, as an argument, and logs a
// right triangle whose sides each have n stars. The hypotenuse of the triangle
// (the diagonal side in the images below) should have one end at the lower-left
// of the triangle, and the other end at the upper-right.

// Problem
// in: positive integer N
// out: printed triangle, each side having N stars
//
// Algorithm
// BEGIN
//   SET i = 1
//   SET j = N - i
//   SET line = " ".repeat(j) + '*'.repeat(i)
//   until i = N
//     i += 1
//     print line
// END

function triangle(size) {
  for (let stars = 1; stars <= size; stars+= 1) {
    spaces = size - stars;
    console.log(" ".repeat(spaces) + '*'.repeat(stars));
  }
}

triangle(5);
triangle(9);

// Examples:
//
// triangle(5);
//
//     *
//    **
//   ***
//  ****
// *****
//
// triangle(9);
//
//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********
