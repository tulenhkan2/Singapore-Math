export const lop6 = {
  title: "Grade 6 / Secondary 1 Mathematics (Singapore Curriculum)",
  topics: [
    {
      id: "l6_dang1",
      name: "Topic 1: Primes, Highest Common Factor (HCF) & Lowest Common Multiple (LCM)",
      questions: [
        {
          id: 1,
          content: "Problem 1: Express 120 as a product of its prime factors in index notation.",
          solution: "120 = 12 × 10 = (2² × 3) × (2 × 5) = 2³ × 3 × 5",
          answer: "2³ × 3 × 5"
        },
        {
          id: 2,
          content: "Problem 2: Find the Highest Common Factor (HCF) of 36 and 54.",
          solution: "36 = 2² × 3²\n54 = 2 × 3³\nHCF = 2¹ × 3² = 18",
          answer: "18"
        },
        {
          id: 3,
          content: "Problem 3: Find the Lowest Common Multiple (LCM) of 12, 18, and 24.",
          solution: "12 = 2² × 3\n18 = 2 × 3²\n24 = 2³ × 3\nLCM = 2³ × 3² = 8 × 9 = 72",
          answer: "72"
        },
        {
          id: 4,
          content: "Problem 4: Two lights flash at intervals of 15 seconds and 20 seconds. If they flash together at 10:00 AM, when will they next flash together?",
          solution: "Find LCM of 15 and 20.\n15 = 3 × 5, 20 = 2² × 5\nLCM = 2² × 3 × 5 = 60 seconds (1 minute).\nNext flash = 10:01 AM",
          answer: "10:01 AM"
        },
        {
          id: 5,
          content: "Problem 5: Find the smallest whole number k such that 90k is a perfect square.",
          solution: "90 = 2 × 3² × 5\nFor 90k to be a perfect square, all prime exponents must be even.\nMultiply by 2¹ × 5¹ = 10.\nThus, k = 10",
          answer: "10"
        },
        {
          id: 6,
          content: "Problem 6: A rectangle of 42 cm by 70 cm is to be cut into equal squares. Find the maximum length of the side of each square.",
          solution: "The side length is the HCF of 42 and 70.\n42 = 2 × 3 × 7\n70 = 2 × 5 × 7\nHCF = 2 × 7 = 14 cm",
          answer: "14 cm"
        },
        {
          id: 7,
          content: "Problem 7: Determine whether 91 is a prime number or a composite number.",
          solution: "Check divisibility by prime numbers ≤ √91 ≈ 9.5.\n91 ÷ 7 = 13.\nSince it has factors other than 1 and itself, 91 is a composite number.",
          answer: "Composite number"
        },
        {
          id: 8,
          content: "Problem 8: Express 252 as a product of prime factors.",
          solution: "252 = 2 × 126 = 2² × 63 = 2² × 3² × 7",
          answer: "2² × 3² × 7"
        },
        {
          id: 9,
          content: "Problem 9: Find the square root of 1764 using prime factorisation.",
          solution: "1764 = 2² × 3² × 7²\n√1764 = √(2² × 3² × 7²) = 2 × 3 × 7 = 42",
          answer: "42"
        },
        {
          id: 10,
          content: "Problem 10: Find the cube root of 216 using prime factorisation.",
          solution: "216 = 2³ × 3³\n³√216 = ³√(2³ × 3³) = 2 × 3 = 6",
          answer: "6"
        },
        {
          id: 11,
          content: "Problem 11: Three bells toll together at 8:00 AM. They toll at intervals of 6 min, 9 min, and 15 min respectively. At what time will they toll together again?",
          solution: "LCM of 6, 9, 15:\n6 = 2 × 3, 9 = 3², 15 = 3 × 5\nLCM = 2 × 3² × 5 = 90 minutes = 1 hr 30 min.\nNext toll = 8:00 AM + 1 hr 30 min = 9:30 AM",
          answer: "9:30 AM"
        },
        {
          id: 12,
          content: "Problem 12: Find the largest integer that divides both 84 and 108 without leaving a remainder.",
          solution: "Required integer is HCF of 84 and 108.\n84 = 2² × 3 × 7\n108 = 2² × 3³\nHCF = 2² × 3 = 12",
          answer: "12"
        },
        {
          id: 13,
          content: "Problem 13: Find the smallest integer value of n such that 180n is a perfect cube.",
          solution: "180 = 2² × 3² × 5\nTo make exponents multiples of 3, multiply by 2¹ × 3¹ × 5² = 2 × 3 × 25 = 150.\nThus, n = 150",
          answer: "150"
        },
        {
          id: 14,
          content: "Problem 14: If the HCF of two numbers is 6 and their LCM is 144, and one number is 36, find the other number.",
          solution: "Formula: Number 1 × Number 2 = HCF × LCM\n36 × x = 6 × 144\nx = (6 × 144) ÷ 36 = 24",
          answer: "24"
        },
        {
          id: 15,
          content: "Problem 15: Find the HCF of 48, 72, and 120.",
          solution: "48 = 2⁴ × 3\n72 = 2³ × 3²\n120 = 2³ × 3 × 5\nHCF = 2³ × 3 = 24",
          answer: "24"
        },
        {
          id: 16,
          content: "Problem 16: Express 504 in prime index notation.",
          solution: "504 = 8 × 63 = 2³ × 3² × 7",
          answer: "2³ × 3² × 7"
        },
        {
          id: 17,
          content: "Problem 17: How many prime numbers are there between 20 and 40?",
          solution: "Primes between 20 and 40 are: 23, 29, 31, 37.\nTotal = 4 prime numbers",
          answer: "4"
        },
        {
          id: 18,
          content: "Problem 18: Find the smallest number that is divisible by 14, 21, and 28.",
          solution: "Find LCM of 14, 21, and 28.\n14 = 2 × 7, 21 = 3 × 7, 28 = 2² × 7\nLCM = 2² × 3 × 7 = 84",
          answer: "84"
        },
        {
          id: 19,
          content: "Problem 19: A teacher wants to distribute 48 pens and 64 notebooks equally among students. What is the maximum number of students who can receive them?",
          solution: "Maximum students = HCF of 48 and 64.\n48 = 2⁴ × 3, 64 = 2⁶\nHCF = 2⁴ = 16",
          answer: "16 students"
        },
        {
          id: 20,
          content: "Problem 20: Evaluate √(3² × 5⁴) without using a calculator.",
          solution: "√(3² × 5⁴) = 3¹ × 5² = 3 × 25 = 75",
          answer: "75"
        }
      ]
    },
    {
      id: "l6_dang2",
      name: "Topic 2: Integers, Rational Numbers & Real Numbers",
      questions: [
        {
          id: 1,
          content: "Problem 1: Evaluate: (-18) + (-27) - (-15)",
          solution: "(-18) - 27 + 15 = -45 + 15 = -30",
          answer: "-30"
        },
        {
          id: 2,
          content: "Problem 2: Calculate: (-12) × (-8) ÷ (-4)",
          solution: "Step 1: (-12) × (-8) = 96\nStep 2: 96 ÷ (-4) = -24",
          answer: "-24"
        },
        {
          id: 3,
          content: "Problem 3: Evaluate: | -15 | + | 8 | - | -6 |",
          solution: "15 + 8 - 6 = 17",
          answer: "17"
        },
        {
          id: 4,
          content: "Problem 4: Evaluate: (-3)³ + (-2)⁴",
          solution: "(-3)³ = -27\n(-2)⁴ = 16\n-27 + 16 = -11",
          answer: "-11"
        },
        {
          id: 5,
          content: "Problem 5: Evaluate: 24 - 4 × (3 - 8)",
          solution: "Parentheses: 3 - 8 = -5\nMultiply: 4 × (-5) = -20\nSubtract: 24 - (-20) = 24 + 20 = 44",
          answer: "44"
        },
        {
          id: 6,
          content: "Problem 6: The temperature in a town was -4°C in the morning. By noon, it rose by 9°C, and by midnight, it dropped by 7°C. Find the midnight temperature.",
          solution: "-4 + 9 - 7 = 5 - 7 = -2°C",
          answer: "-2°C"
        },
        {
          id: 7,
          content: "Problem 7: Evaluate: [(-5)² - (-3)³] ÷ (-2)",
          solution: "(-5)² = 25\n(-3)³ = -27\nInside bracket: 25 - (-27) = 52\nDivision: 52 ÷ (-2) = -26",
          answer: "-26"
        },
        {
          id: 8,
          content: "Problem 8: Arrange in ascending order: -0.8, -3/4, 0, -1, 1/2.",
          solution: "Convert to decimals: -3/4 = -0.75, 1/2 = 0.5.\nAscending order: -1, -0.8, -3/4, 0, 1/2",
          answer: "-1, -0.8, -3/4, 0, 1/2"
        },
        {
          id: 9,
          content: "Problem 9: A submarine is at a depth of -120 m. It ascends 45 m and then descends 30 m. Find its final depth.",
          solution: "-120 + 45 - 30 = -105 m (105 m below sea level)",
          answer: "-105 m"
        },
        {
          id: 10,
          content: "Problem 10: Evaluate: 15 / (-3) - (-4) × 2",
          solution: "Division: 15 / (-3) = -5\nMultiplication: (-4) × 2 = -8\nSubtract: -5 - (-8) = -5 + 8 = 3",
          answer: "3"
        },
        {
          id: 11,
          content: "Problem 11: Find the value of x if x + (-14) = -5.",
          solution: "x = -5 - (-14) = -5 + 14 = 9",
          answer: "9"
        },
        {
          id: 12,
          content: "Problem 12: Evaluate: (-1)¹⁰⁰ + (-1)¹⁰¹",
          solution: "(-1)¹⁰⁰ = 1 (even power)\n(-1)¹⁰¹ = -1 (odd power)\n1 + (-1) = 0",
          answer: "0"
        },
        {
          id: 13,
          content: "Problem 13: Calculate: (-36 ÷ 9) - (7 - 12)",
          solution: "(-36 ÷ 9) = -4\n(7 - 12) = -5\n-4 - (-5) = -4 + 5 = 1",
          answer: "1"
        },
        {
          id: 14,
          content: "Problem 14: If a = -2 and b = 3, evaluate a²b - ab².",
          solution: "a²b = (-2)² × 3 = 4 × 3 = 12\nab² = (-2) × 3² = (-2) × 9 = -18\n12 - (-18) = 12 + 18 = 30",
          answer: "30"
        },
        {
          id: 15,
          content: "Problem 15: Find the difference between -18 and -25.",
          solution: "Difference = -18 - (-25) = -18 + 25 = 7",
          answer: "7"
        },
        {
          id: 16,
          content: "Problem 16: Evaluate: (-2) × (-3) × (-4) × (-5)",
          solution: "Product of 4 negative numbers is positive:\n2 × 3 × 4 × 5 = 120",
          answer: "120"
        },
        {
          id: 17,
          content: "Problem 17: Solve for y: -3y = 21",
          solution: "y = 21 ÷ (-3) = -7",
          answer: "-7"
        },
        {
          id: 18,
          content: "Problem 18: Evaluate: √64 - ³√(-27)",
          solution: "√64 = 8\n³√(-27) = -3\n8 - (-3) = 8 + 3 = 11",
          answer: "11"
        },
        {
          id: 19,
          content: "Problem 19: A bank account balance was -$50. A deposit of $200 was made, followed by a withdrawal of $80. What is the new balance?",
          solution: "-50 + 200 - 80 = 150 - 80 = $70",
          answer: "$70"
        },
        {
          id: 20,
          content: "Problem 20: Simplify: (-8 + 2) / (-3 + 1)",
          solution: "Numerator: -8 + 2 = -6\nDenominator: -3 + 1 = -2\n-6 / -2 = 3",
          answer: "3"
        }
      ]
    },
    {
      id: "l6_dang3",
      name: "Topic 3: Algebraic Expressions & Manipulation",
      questions: [
        {
          id: 1,
          content: "Problem 1: Simplify: 4x + 7y - 2x + 3y",
          solution: "Group like terms: (4x - 2x) + (7y + 3y) = 2x + 10y",
          answer: "2x + 10y"
        },
        {
          id: 2,
          content: "Problem 2: Expand and simplify: 3(2x - 4) + 2(x + 5)",
          solution: "6x - 12 + 2x + 10 = (6x + 2x) + (-12 + 10) = 8x - 2",
          answer: "8x - 2"
        },
        {
          id: 3,
          content: "Problem 3: Evaluate 3a² - 2ab when a = -3 and b = 4.",
          solution: "3(-3)² - 2(-3)(4) = 3(9) - (-24) = 27 + 24 = 51",
          answer: "51"
        },
        {
          id: 4,
          content: "Problem 4: Expand: -4x(2y - 3z)",
          solution: "(-4x)(2y) - (-4x)(3z) = -8xy + 12xz",
          answer: "-8xy + 12xz"
        },
        {
          id: 5,
          content: "Problem 5: Factorise completely: 6a + 15ab",
          solution: "HCF of 6a and 15ab is 3a.\nFactor out 3a: 3a(2 + 5b)",
          answer: "3a(2 + 5b)"
        },
        {
          id: 6,
          content: "Problem 6: Simplify: (8x - 12) / 4",
          solution: "Divide each term by 4: (8x / 4) - (12 / 4) = 2x - 3",
          answer: "2x - 3"
        },
        {
          id: 7,
          content: "Problem 7: Simplify: 3/x + 2/y as a single fraction.",
          solution: "Common denominator is xy: (3y + 2x) / xy",
          answer: "(3y + 2x) / xy"
        },
        {
          id: 8,
          content: "Problem 8: Subtract (2x - 5y) from (5x + 3y).",
          solution: "(5x + 3y) - (2x - 5y) = 5x + 3y - 2x + 5y = 3x + 8y",
          answer: "3x + 8y"
        },
        {
          id: 9,
          content: "Problem 9: Expand: -(3a - 7b + 2)",
          solution: "Multiply each term by -1: -3a + 7b - 2",
          answer: "-3a + 7b - 2"
        },
        {
          id: 10,
          content: "Problem 10: Factorise completely: 12x²y - 18xy²",
          solution: "HCF of 12 and 18 is 6. HCF of x²y and xy² is xy.\nFactor out 6xy: 6xy(2x - 3y)",
          answer: "6xy(2x - 3y)"
        },
        {
          id: 11,
          content: "Problem 11: Simplify: 2(a - 3b) - 4(2a - b)",
          solution: "2a - 6b - 8a + 4b = -6a - 2b",
          answer: "-6a - 2b"
        },
        {
          id: 12,
          content: "Problem 12: If x = 5 and y = -2, find the value of (x² + y²) / (x - y).",
          solution: "Numerator: 5² + (-2)² = 25 + 4 = 29\nDenominator: 5 - (-2) = 7\nFraction = 29/7 or 4 1/7",
          answer: "29/7"
        },
        {
          id: 13,
          content: "Problem 13: Express (x + 2)/3 + (2x - 1)/4 as a single fraction.",
          solution: "Common denominator = 12.\n[4(x + 2) + 3(2x - 1)] / 12 = [4x + 8 + 6x - 3] / 12 = (10x + 5) / 12",
          answer: "(10x + 5) / 12"
        },
        {
          id: 14,
          content: "Problem 14: Factorise: 5x - 20",
          solution: "Factor out 5: 5(x - 4)",
          answer: "5(x - 4)"
        },
        {
          id: 15,
          content: "Problem 15: A pen costs x cents and a notebook costs (x + 50) cents. Write an algebraic expression for the total cost of 3 pens and 2 notebooks.",
          solution: "Total cost = 3(x) + 2(x + 50) = 3x + 2x + 100 = (5x + 100) cents",
          answer: "5x + 100 cents"
        },
        {
          id: 16,
          content: "Problem 16: Simplify: 5p - 2(3p - 4)",
          solution: "5p - 6p + 8 = -p + 8 or 8 - p",
          answer: "8 - p"
        },
        {
          id: 17,
          content: "Problem 17: Evaluate 4x³ when x = -2.",
          solution: "4(-2)³ = 4(-8) = -32",
          answer: "-32"
        },
        {
          id: 18,
          content: "Problem 18: Simplify: (12p²q) / (4pq)",
          solution: "(12/4) × (p²/p) × (q/q) = 3p",
          answer: "3p"
        },
        {
          id: 19,
          content: "Problem 19: Expand: 1/2(4x - 8y + 12)",
          solution: "2x - 4y + 6",
          answer: "2x - 4y + 6"
        },
        {
          id: 20,
          content: "Problem 20: Factorise completely: 14m - 21n + 7",
          solution: "Factor out 7: 7(2m - 3n + 1)",
          answer: "7(2m - 3n + 1)"
        }
      ]
    },
    {
      id: "l6_dang4",
      name: "Topic 4: Linear Equations & Simple Inequalities",
      questions: [
        {
          id: 1,
          content: "Problem 1: Solve for x: 3x - 7 = 14",
          solution: "3x = 14 + 7 = 21 → x = 7",
          answer: "x = 7"
        },
        {
          id: 2,
          content: "Problem 2: Solve for y: 4(y - 2) = 20",
          solution: "y - 2 = 5 → y = 7",
          answer: "y = 7"
        },
        {
          id: 3,
          content: "Problem 3: Solve for x: 5x + 3 = 2x + 18",
          solution: "5x - 2x = 18 - 3 → 3x = 15 → x = 5",
          answer: "x = 5"
        },
        {
          id: 4,
          content: "Problem 4: Solve for x: (2x + 5) / 3 = 7",
          solution: "2x + 5 = 21 → 2x = 16 → x = 8",
          answer: "x = 8"
        },
        {
          id: 5,
          content: "Problem 5: Solve the inequality: 3x - 4 > 11",
          solution: "3x > 15 → x > 5",
          answer: "x > 5"
        },
        {
          id: 6,
          content: "Problem 6: Solve for x: 2(3x - 1) - 3(x + 2) = 4",
          solution: "6x - 2 - 3x - 6 = 4 → 3x - 8 = 4 → 3x = 12 → x = 4",
          answer: "x = 4"
        },
        {
          id: 7,
          content: "Problem 7: Solve the inequality: -2x ≤ 10",
          solution: "Divide by -2 (flip inequality sign): x ≥ -5",
          answer: "x ≥ -5"
        },
        {
          id: 8,
          content: "Problem 8: The sum of three consecutive integers is 51. Find the largest integer.",
          solution: "Let integers be x, x+1, x+2.\nx + x + 1 + x + 2 = 51 → 3x + 3 = 51 → 3x = 48 → x = 16.\nLargest integer = 16 + 2 = 18",
          answer: "18"
        },
        {
          id: 9,
          content: "Problem 9: Solve for m: 3/4 m = 15",
          solution: "m = 15 × (4/3) = 20",
          answer: "m = 20"
        },
        {
          id: 10,
          content: "Problem 10: Solve for x: (x - 3)/2 = (x + 1)/4",
          solution: "Cross-multiply: 4(x - 3) = 2(x + 1)\n4x - 12 = 2x + 2 → 2x = 14 → x = 7",
          answer: "x = 7"
        },
        {
          id: 11,
          content: "Problem 11: Solve the inequality: 5 - 2x > 1",
          solution: "-2x > 1 - 5 → -2x > -4 → x < 2",
          answer: "x < 2"
        },
        {
          id: 12,
          content: "Problem 12: A father is 4 times as old as his son. In 20 years, he will be twice as old as his son. Find the son's present age.",
          solution: "Let son's age = x. Father's age = 4x.\nIn 20 years: 4x + 20 = 2(x + 20)\n4x + 20 = 2x + 40 → 2x = 20 → x = 10",
          answer: "10 years old"
        },
        {
          id: 13,
          content: "Problem 13: Solve for x: 0.4x + 1.2 = 3.6",
          solution: "0.4x = 2.4 → x = 2.4 ÷ 0.4 = 6",
          answer: "x = 6"
        },
        {
          id: 14,
          content: "Problem 14: Solve for y: 5 - (y + 2) = 2y - 6",
          solution: "5 - y - 2 = 2y - 6 → 3 - y = 2y - 6 → 3y = 9 → y = 3",
          answer: "y = 3"
        },
        {
          id: 15,
          content: "Problem 15: Find the smallest integer x that satisfies 4x > 17.",
          solution: "x > 17/4 (x > 4.25).\nSmallest integer x = 5",
          answer: "5"
        },
        {
          id: 16,
          content: "Problem 16: Solve for x: x/3 + x/2 = 10",
          solution: "Common denominator = 6: (2x + 3x)/6 = 10 → 5x = 60 → x = 12",
          answer: "x = 12"
        },
        {
          id: 17,
          content: "Problem 17: Rectangle length is (x + 3) cm and width is 5 cm. If perimeter is 32 cm, find x.",
          solution: "2[(x + 3) + 5] = 32 → 2(x + 8) = 32 → x + 8 = 16 → x = 8",
          answer: "x = 8"
        },
        {
          id: 18,
          content: "Problem 18: Solve for a: 2/a = 4/9",
          solution: "Cross-multiply: 4a = 18 → a = 18/4 = 4.5",
          answer: "a = 4.5"
        },
        {
          id: 19,
          content: "Problem 19: Solve the inequality: 2(x - 3) ≥ 3x - 10",
          solution: "2x - 6 ≥ 3x - 10 → -x ≥ -4 → x ≤ 4",
          answer: "x ≤ 4"
        },
        {
          id: 20,
          content: "Problem 20: Amy has $x. Betty has $15 more than Amy. Together they have $75. Find x.",
          solution: "x + (x + 15) = 75 → 2x + 15 = 75 → 2x = 60 → x = 30",
          answer: "x = 30"
        }
      ]
    },
    {
      id: "l6_dang5",
      name: "Topic 5: Basic Geometry, Angles & Polygons",
      questions: [
        {
          id: 1,
          content: "Problem 1: Two supplementary angles are in the ratio 4 : 5. Find the larger angle.",
          solution: "Supplementary angles sum to 180°.\nTotal units = 9 units = 180° → 1 unit = 20°.\nLarger angle (5 units) = 5 × 20° = 100°",
          answer: "100°"
        },
        {
          id: 2,
          content: "Problem 2: Find the sum of interior angles of a regular hexagon (6-sided polygon).",
          solution: "Formula: (n - 2) × 180°.\n(6 - 2) × 180° = 4 × 180° = 720°",
          answer: "720°"
        },
        {
          id: 3,
          content: "Problem 3: Each interior angle of a regular polygon is 140°. How many sides does it have?",
          solution: "Exterior angle = 180° - 140° = 40°.\nNumber of sides n = 360° ÷ 40° = 9 sides",
          answer: "9 sides"
        },
        {
          id: 4,
          content: "Problem 4: Lines AB and CD intersect at O. If ∠AOC = (3x + 10)° and ∠BOD = (5x - 20)°, find x.",
          solution: "Vertically opposite angles are equal:\n3x + 10 = 5x - 20 → 2x = 30 → x = 15",
          answer: "15"
        },
        {
          id: 5,
          content: "Problem 5: In △ABC, ∠A = 2x°, ∠B = 3x°, and ∠C = 4x°. Find the measure of ∠C.",
          solution: "2x + 3x + 4x = 180° → 9x = 180° → x = 20°.\n∠C = 4 × 20° = 80°",
          answer: "80°"
        },
        {
          id: 6,
          content: "Problem 6: Two parallel lines are cut by a transversal. If one interior alternate angle is (4x - 15)° and the other is (2x + 35)°, find x.",
          solution: "Alternate angles are equal:\n4x - 15 = 2x + 35 → 2x = 50 → x = 25",
          answer: "25"
        },
        {
          id: 7,
          content: "Problem 7: Find the size of each exterior angle of a regular octagon (8 sides).",
          solution: "Exterior angle = 360° ÷ 8 = 45°",
          answer: "45°"
        },
        {
          id: 8,
          content: "Problem 8: An angle is 34° more than its complement. Find the angle.",
          solution: "Complementary angles sum to 90°.\nx + (x - 34) = 90 → 2x = 124 → x = 62°",
          answer: "62°"
        },
        {
          id: 9,
          content: "Problem 9: Find the sum of exterior angles of a 12-sided polygon.",
          solution: "The sum of exterior angles of any convex polygon is always 360°.",
          answer: "360°"
        },
        {
          id: 10,
          content: "Problem 10: In △XYZ, XY = XZ and ∠Y = 55°. Find ∠X.",
          solution: "Since XY = XZ, ∠Z = ∠Y = 55°.\n∠X = 180° - (55° + 55°) = 180° - 110° = 70°",
          answer: "70°"
        },
        {
          id: 11,
          content: "Problem 11: In a parallelogram ABCD, ∠A = (2x + 10)° and ∠B = (3x - 10)°. Find x.",
          solution: "Adjacent angles in a parallelogram are supplementary:\n(2x + 10) + (3x - 10) = 180 → 5x = 180 → x = 36",
          answer: "36"
        },
        {
          id: 12,
          content: "Problem 12: Calculate the area of a trapezium with parallel sides 8 cm and 12 cm, and height 5 cm.",
          solution: "Area = 1/2 × (a + b) × h = 0.5 × (8 + 12) × 5 = 0.5 × 20 × 5 = 50 cm²",
          answer: "50 cm²"
        },
        {
          id: 13,
          content: "Problem 13: How many sides does a polygon have if the sum of its interior angles is 1440°?",
          solution: "(n - 2) × 180° = 1440° → n - 2 = 1440 / 180 = 8 → n = 10 sides",
          answer: "10 sides"
        },
        {
          id: 14,
          content: "Problem 14: Find the area of a circle with a radius of 7 cm. (Take π = 22/7)",
          solution: "Area = πr² = (22/7) × 7 × 7 = 154 cm²",
          answer: "154 cm²"
        },
        {
          id: 15,
          content: "Problem 15: Find the perimeter of a semi-circle of diameter 14 cm. (Take π = 22/7)",
          solution: "Radius r = 7 cm.\nCurved arc = πr = (22/7) × 7 = 22 cm.\nTotal perimeter = Arc + Diameter = 22 + 14 = 36 cm",
          answer: "36 cm"
        },
        {
          id: 16,
          content: "Problem 16: Two interior angles on the same side of a transversal cutting parallel lines are in ratio 2 : 3. Find the smaller angle.",
          solution: "Interior angles on same side sum to 180°.\n5 units = 180° → 1 unit = 36°.\nSmaller angle (2 units) = 2 × 36° = 72°",
          answer: "72°"
        },
        {
          id: 17,
          content: "Problem 17: Find each interior angle of a regular decagon (10 sides).",
          solution: "Sum = (10 - 2) × 180° = 1440°.\nEach interior angle = 1440° ÷ 10 = 144°",
          answer: "144°"
        },
        {
          id: 18,
          content: "Problem 18: In a rhombus ABCD, the diagonals intersect at O. What is the measure of ∠AOB?",
          solution: "Diagonals of a rhombus intersect at right angles (90°).",
          answer: "90°"
        },
        {
          id: 19,
          content: "Problem 19: The area of a circle is 616 cm². Find its radius. (Take π = 22/7)",
          solution: "(22/7) × r² = 616 → r² = 616 × (7/22) = 196 → r = √196 = 14 cm",
          answer: "14 cm"
        },
        {
          id: 20,
          content: "Problem 20: The exterior angle of a regular polygon is 30°. Find the total number of diagonals in this polygon.",
          solution: "Number of sides n = 360° ÷ 30° = 12 sides.\nDiagonals formula = n(n - 3) / 2 = 12(9) / 2 = 54",
          answer: "54 diagonals"
        }
      ]
    }
  ]
};
