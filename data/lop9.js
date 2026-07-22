export const lop9 = {
  title: "Grade 9 / Secondary 4 Mathematics (Singapore O-Level Curriculum)",
  topics: [
    {
      id: "l9_dang1",
      name: "Topic 1: Further Sets & Venn Diagrams",
      questions: [
        {
          id: 1,
          content: "Problem 1: Given Universal set ξ = {x : x is an integer, 1 ≤ x ≤ 10}, A = {prime numbers}, and B = {odd numbers}. List the elements of A ∩ B.",
          solution: "ξ = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}.\nA = {2, 3, 5, 7}.\nB = {1, 3, 5, 7, 9}.\nA ∩ B contains elements present in both A and B: {3, 5, 7}.",
          answer: "{3, 5, 7}"
        },
        {
          id: 2,
          content: "Problem 2: Using the sets from Problem 1, list the elements of (A ∪ B)'.",
          solution: "A ∪ B = {1, 2, 3, 5, 7, 9}.\n(A ∪ B)' contains elements in ξ but not in A ∪ B: {4, 6, 8, 10}.",
          answer: "{4, 6, 8, 10}"
        },
        {
          id: 3,
          content: "Problem 3: If n(ξ) = 40, n(A) = 22, n(B) = 18, and n(A ∩ B) = 8, find n(A ∪ B)'.",
          solution: "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 22 + 18 - 8 = 32.\nn(A ∪ B)' = n(ξ) - n(A ∪ B) = 40 - 32 = 8.",
          answer: "8"
        },
        {
          id: 4,
          content: "Problem 4: State whether the statement is True or False: If A ⊂ B, then A ∩ B = A.",
          solution: "Since every element of A is also in B, the intersection of A and B is set A itself. Thus, the statement is True.",
          answer: "True"
        },
        {
          id: 5,
          content: "Problem 5: In a class of 30 students, 18 study Physics, 15 study Chemistry, and 3 study neither. How many students study both subjects?",
          solution: "Students studying at least one subject = 30 - 3 = 27.\nUsing n(P ∪ C) = n(P) + n(C) - n(P ∩ C):\n27 = 18 + 15 - n(P ∩ C) → 27 = 33 - n(P ∩ C) → n(P ∩ C) = 6.",
          answer: "6"
        },
        {
          id: 6,
          content: "Problem 6: Given P = {x : x is a factor of 12} and Q = {x : x is a factor of 18}. Find n(P ∪ Q).",
          solution: "P = {1, 2, 3, 4, 6, 12}.\nQ = {1, 2, 3, 6, 9, 18}.\nP ∪ Q = {1, 2, 3, 4, 6, 9, 12, 18}.\nn(P ∪ Q) = 8.",
          answer: "8"
        },
        {
          id: 7,
          content: "Problem 7: Simplify the set notation: A ∩ A'.",
          solution: "A set and its complement have no common elements. Therefore, A ∩ A' = ∅ (the empty set).",
          answer: "∅"
        },
        {
          id: 8,
          content: "Problem 8: Simplify the set notation: A ∪ A'.",
          solution: "The union of a set and its complement covers all possible elements in the universal set ξ.",
          answer: "ξ"
        },
        {
          id: 9,
          content: "Problem 9: Given ξ = {1, 2, 3, 4, 5, 6}, A = {2, 4, 6}. Find the number of subsets of set A.",
          solution: "Number of elements in A, n(A) = 3.\nTotal number of subsets = 2^(n(A)) = 2³ = 8.",
          answer: "8"
        },
        {
          id: 10,
          content: "Problem 10: Find the number of proper subsets of set A from Problem 9.",
          solution: "Number of proper subsets = 2ⁿ - 1 = 8 - 1 = 7.",
          answer: "7"
        },
        {
          id: 11,
          content: "Problem 11: If A ∩ B = ∅, what can be said about sets A and B?",
          solution: "When two sets have no elements in common, they are called disjoint sets.",
          answer: "They are disjoint sets"
        },
        {
          id: 12,
          content: "Problem 12: In a survey of 50 people, 30 like tea, 25 like coffee, and x like both. If every person likes at least one beverage, find x.",
          solution: "n(T ∪ C) = n(T) + n(C) - n(T ∩ C) → 50 = 30 + 25 - x → 50 = 55 - x → x = 5.",
          answer: "5"
        },
        {
          id: 13,
          content: "Problem 13: Given ξ = {x : x is a positive integer ≤ 12}, X = {multiples of 3}, Y = {multiples of 4}. List X ∩ Y.",
          solution: "X = {3, 6, 9, 12}, Y = {4, 8, 12}.\nCommon elements X ∩ Y = {12}.",
          answer: "{12}"
        },
        {
          id: 14,
          content: "Problem 14: Using sets from Problem 13, list X ∩ Y'.",
          solution: "Y' = {1, 2, 3, 5, 6, 7, 9, 10, 11, 12}' = {1, 2, 3, 5, 6, 7, 9, 10, 11}.\nX ∩ Y' represents elements in X but NOT in Y: {3, 6, 9}.",
          answer: "{3, 6, 9}"
        },
        {
          id: 15,
          content: "Problem 15: Shade/Identify region (A ∪ B)' in terms of A' and B' using De Morgan's Law.",
          solution: "By De Morgan's Law, (A ∪ B)' = A' ∩ B'.",
          answer: "A' ∩ B'"
        },
        {
          id: 16,
          content: "Problem 16: By De Morgan's Law, express (A ∩ B)' in another form.",
          solution: "By De Morgan's Law, (A ∩ B)' = A' ∪ B'.",
          answer: "A' ∪ B'"
        },
        {
          id: 17,
          content: "Problem 17: If n(A) = 15, n(B) = 20, and A ⊂ B, find n(A ∩ B).",
          solution: "Since A is a subset of B, A ∩ B = A. Therefore, n(A ∩ B) = n(A) = 15.",
          answer: "15"
        },
        {
          id: 18,
          content: "Problem 18: Using the same condition as Problem 17, find n(A ∪ B).",
          solution: "Since A ⊂ B, A ∪ B = B. Therefore, n(A ∪ B) = n(B) = 20.",
          answer: "20"
        },
        {
          id: 19,
          content: "Problem 19: Out of 100 students, 60 play football, 45 play basketball, and 10 play neither. Find the probability that a student chosen at random plays BOTH sports.",
          solution: "Students playing at least one = 100 - 10 = 90.\nBoth = 60 + 45 - 90 = 15.\nProbability = 15 / 100 = 3/20.",
          answer: "3/20"
        },
        {
          id: 20,
          content: "Problem 20: Given ξ = {letters in 'SINGAPORE'}, V = {vowels}. Find n(V').",
          solution: "ξ = {S, I, N, G, A, P, O, R, E}, n(ξ) = 9.\nVowels V = {I, A, O, E}, n(V) = 4.\nn(V') = n(ξ) - n(V) = 9 - 4 = 5.",
          answer: "5"
        }
      ]
    },
    {
      id: "l9_dang2",
      name: "Topic 2: Matrices & Matrix Transformations",
      questions: [
        {
          id: 1,
          content: "Problem 1: Given matrix A = [2 3; 1 4] and B = [5 -1; 0 2], find A + B.",
          solution: "A + B = [2+5  3+(-1); 1+0  4+2] = [7 2; 1 6].",
          answer: "[7 2; 1 6]"
        },
        {
          id: 2,
          content: "Problem 2: Given A = [4 -2; 3 1], find 2A.",
          solution: "2A = [2(4) 2(-2); 2(3) 2(1)] = [8 -4; 6 2].",
          answer: "[8 -4; 6 2]"
        },
        {
          id: 3,
          content: "Problem 3: Calculate the product [1 2; 3 4] × [5; 6].",
          solution: "Row 1: (1)(5) + (2)(6) = 5 + 12 = 17.\nRow 2: (3)(5) + (4)(6) = 15 + 24 = 39.\nResult = [17; 39].",
          answer: "[17; 39]"
        },
        {
          id: 4,
          content: "Problem 4: Find the determinant of matrix M = [3 5; 2 4].",
          solution: "det(M) = ad - bc = (3)(4) - (5)(2) = 12 - 10 = 2.",
          answer: "2"
        },
        {
          id: 5,
          content: "Problem 5: Find the inverse of matrix M = [3 5; 2 4].",
          solution: "det(M) = 2.\nM⁻¹ = (1/det) [d -b; -c a] = (1/2) [4 -5; -2 3] = [2 -2.5; -1 1.5].",
          answer: "[2 -2.5; -1 1.5]"
        },
        {
          id: 6,
          content: "Problem 6: Calculate the product A B where A = [2 1; 0 3] and B = [1 4; 2 5].",
          solution: "Top-left: 2(1)+1(2)=4. Top-right: 2(4)+1(5)=13.\nBottom-left: 0(1)+3(2)=6. Bottom-right: 0(4)+3(5)=15.\nResult = [4 13; 6 15].",
          answer: "[4 13; 6 15]"
        },
        {
          id: 7,
          content: "Problem 7: State the order/dimension of matrix P = [1 2 3; 4 5 6].",
          solution: "The matrix has 2 rows and 3 columns, so its order is 2 × 3.",
          answer: "2 × 3"
        },
        {
          id: 8,
          content: "Problem 8: For matrix A (size 2×3) and matrix B (size 3×4), what is the order of product AB?",
          solution: "Product dimension is (2 × 3) × (3 × 4) = 2 × 4.",
          answer: "2 × 4"
        },
        {
          id: 9,
          content: "Problem 9: Find the value of x if det([x 4; 3 2]) = 10.",
          solution: "det = 2x - (4)(3) = 10 → 2x - 12 = 10 → 2x = 22 → x = 11.",
          answer: "11"
        },
        {
          id: 10,
          content: "Problem 10: Find the value of k for which matrix [k 6; 2 3] does not have an inverse.",
          solution: "Matrix has no inverse when det = 0 → 3k - 12 = 0 → 3k = 12 → k = 4.",
          answer: "4"
        },
        {
          id: 11,
          content: "Problem 11: Identify the transformation matrix represented by [1 0; 0 -1].",
          solution: "This matrix reflects point (x, y) to (x, -y), which is a reflection in the x-axis.",
          answer: "Reflection in the x-axis"
        },
        {
          id: 12,
          content: "Problem 12: Identify the transformation matrix represented by [-1 0; 0 1].",
          solution: "This matrix reflects point (x, y) to (-x, y), which is a reflection in the y-axis.",
          answer: "Reflection in the y-axis"
        },
        {
          id: 13,
          content: "Problem 13: Write down the 2×2 matrix representing a rotation of 90° anticlockwise about the origin.",
          solution: "Standard matrix for 90° anticlockwise rotation is [cos 90° -sin 90°; sin 90° cos 90°] = [0 -1; 1 0].",
          answer: "[0 -1; 1 0]"
        },
        {
          id: 14,
          content: "Problem 14: Write down the 2×2 matrix representing an enlargement by scale factor 3 centred at the origin.",
          solution: "Enlargement matrix is [k 0; 0 k] = [3 0; 0 3].",
          answer: "[3 0; 0 3]"
        },
        {
          id: 15,
          content: "Problem 15: Find the image of point (3, -2) under transformation matrix T = [2 0; 0 2].",
          solution: "[2 0; 0 2] × [3; -2] = [6; -4]. The image point is (6, -4).",
          answer: "(6, -4)"
        },
        {
          id: 16,
          content: "Problem 16: Given A = [1 0; 0 1] (Identity matrix I), evaluate A × [5 7; -2 4].",
          solution: "Multiplying any matrix by the Identity matrix leaves it unchanged.",
          answer: "[5 7; -2 4]"
        },
        {
          id: 17,
          content: "Problem 17: Solve matrix equation: [2 0; 0 3] [x; y] = [8; 9].",
          solution: "2x = 8 → x = 4.\n3y = 9 → y = 3.",
          answer: "x = 4, y = 3"
        },
        {
          id: 18,
          content: "Problem 18: Find matrix X such that 2X + [1 3; 2 0] = [5 7; 4 6].",
          solution: "2X = [5-1 7-3; 4-2 6-0] = [4 4; 2 6] → X = [2 2; 1 3].",
          answer: "[2 2; 1 3]"
        },
        {
          id: 19,
          content: "Problem 19: State the determinant of any 2×2 singular matrix.",
          solution: "A singular matrix is by definition a matrix whose determinant is equal to 0.",
          answer: "0"
        },
        {
          id: 20,
          content: "Problem 20: If matrix A = [a b; c d], state the general formula for A⁻¹.",
          solution: "A⁻¹ = 1/(ad - bc) * [d -b; -c a], provided ad - bc ≠ 0.",
          answer: "1/(ad - bc) * [d -b; -c a]"
        }
      ]
    },
    {
      id: "l9_dang3",
      name: "Topic 3: Cumulative Frequency, Box Plots & Standard Deviation",
      questions: [
        {
          id: 1,
          content: "Problem 1: Given the dataset: 3, 7, 8, 12, 15. Find the median.",
          solution: "The data is already sorted with 5 numbers. The middle value (3rd number) is 8.",
          answer: "8"
        },
        {
          id: 2,
          content: "Problem 2: Given the dataset: 4, 6, 9, 10, 14, 18. Find the median.",
          solution: "With 6 numbers, median is average of 3rd and 4th terms: (9 + 10) / 2 = 9.5.",
          answer: "9.5"
        },
        {
          id: 3,
          content: "Problem 3: Find the Lower Quartile (Q1) and Upper Quartile (Q3) for: 2, 5, 7, 10, 12, 15, 18.",
          solution: "Median = 10.\nLower half: 2, 5, 7 → Q1 = 5.\nUpper half: 12, 15, 18 → Q3 = 15.",
          answer: "Q1 = 5, Q3 = 15"
        },
        {
          id: 4,
          content: "Problem 4: Calculate Interquartile Range (IQR) from Q1 = 14 and Q3 = 38.",
          solution: "IQR = Q3 - Q1 = 38 - 14 = 24.",
          answer: "24"
        },
        {
          id: 5,
          content: "Problem 5: In a cumulative frequency curve for 80 students, at what cumulative frequency do you read the Median?",
          solution: "Median is read at 50% of total frequency = 0.5 × 80 = 40th value.",
          answer: "40th value"
        },
        {
          id: 6,
          content: "Problem 6: In a cumulative frequency curve for 120 items, at what cumulative frequency do you read the Upper Quartile (Q3)?",
          solution: "Upper Quartile is read at 75% of total frequency = 0.75 × 120 = 90th value.",
          answer: "90th value"
        },
        {
          id: 7,
          content: "Problem 7: Calculate mean of numbers: 4, 8, 12, 16, 20.",
          solution: "Sum = 60. Count = 5. Mean x̄ = 60 / 5 = 12.",
          answer: "12"
        },
        {
          id: 8,
          content: "Problem 8: Calculate standard deviation for: 5, 5, 5, 5, 5.",
          solution: "All numbers are identical to mean (5), so there is no spread. Standard deviation = 0.",
          answer: "0"
        },
        {
          id: 9,
          content: "Problem 9: Find mean of frequency distribution: x = [1, 2, 3], f = [2, 5, 3].",
          solution: "Σfx = (1×2) + (2×5) + (3×3) = 2 + 10 + 9 = 21.\nΣf = 2 + 5 + 3 = 10.\nMean = 21 / 10 = 2.1.",
          answer: "2.1"
        },
        {
          id: 10,
          content: "Problem 10: Which measure of dispersion is most affected by extreme outliers?",
          solution: "Range depends entirely on the minimum and maximum values, making it most sensitive to outliers.",
          answer: "Range"
        },
        {
          id: 11,
          content: "Problem 11: Five numbers have a mean of 10. If a 6th number '16' is added, find the new mean.",
          solution: "Sum of first 5 numbers = 5 × 10 = 50.\nNew sum = 50 + 16 = 66.\nNew mean = 66 / 6 = 11.",
          answer: "11"
        },
        {
          id: 12,
          content: "Problem 12: A box plot shows Min = 10, Q1 = 20, Median = 30, Q3 = 45, Max = 60. State the Range.",
          solution: "Range = Max - Min = 60 - 10 = 50.",
          answer: "50"
        },
        {
          id: 13,
          content: "Problem 13: Using the box plot parameters from Problem 12, find the Interquartile Range.",
          solution: "IQR = Q3 - Q1 = 45 - 20 = 25.",
          answer: "25"
        },
        {
          id: 14,
          content: "Problem 14: Compare two classes: Class A has SD = 2.4, Class B has SD = 4.1. Which class has more consistent scores?",
          solution: "A smaller standard deviation indicates less variability/spread, meaning higher consistency. Class A is more consistent.",
          answer: "Class A"
        },
        {
          id: 15,
          content: "Problem 15: Find the modal class for grouped data: 0-10 (f=4), 10-20 (f=9), 20-30 (f=5).",
          solution: "The class with highest frequency (9) is 10-20.",
          answer: "10-20"
        },
        {
          id: 16,
          content: "Problem 16: State the formula for Standard Deviation (s) of a sample set with mean x̄.",
          solution: "s = √[ Σ(x - x̄)² / N ] or √[ (Σx² / N) - x̄² ].",
          answer: "√[ (Σx² / N) - x̄² ]"
        },
        {
          id: 17,
          content: "Problem 17: Given Σx = 100, Σx² = 2500, and N = 5. Find the standard deviation.",
          solution: "Mean x̄ = 100 / 5 = 20.\nVariance = (2500 / 5) - 20² = 500 - 400 = 100.\nSD = √100 = 10.",
          answer: "10"
        },
        {
          id: 18,
          content: "Problem 18: What percentage of data lies between Q1 and Q3 in a box plot?",
          solution: "The box in a box plot represents the middle 50% of the dataset.",
          answer: "50%"
        },
        {
          id: 19,
          content: "Problem 19: The median mark of Class X is 65 and Class Y is 72. Which class performed better on average?",
          solution: "Class Y has a higher median mark, indicating overall better average performance.",
          answer: "Class Y"
        },
        {
          id: 20,
          content: "Problem 20: If each data value in a set is increased by 5, what happens to the standard deviation?",
          solution: "Adding a constant shifts the entire distribution without changing its spread. Standard deviation remains unchanged.",
          answer: "Remains unchanged"
        }
      ]
    },
    {
      id: "l9_dang4",
      name: "Topic 4: Probability of Combined Events",
      questions: [
        {
          id: 1,
          content: "Problem 1: A fair 6-sided die is rolled. Find the probability of getting a prime number.",
          solution: "Prime numbers on die: {2, 3, 5} → 3 favorable outcomes out of 6.\nProbability = 3/6 = 1/2.",
          answer: "1/2"
        },
        {
          id: 2,
          content: "Problem 2: Two fair coins are tossed. Find the probability of getting at least one Head.",
          solution: "Sample space: {HH, HT, TH, TT}.\nAt least one Head: {HH, HT, TH} → 3 outcomes.\nProbability = 3/4.",
          answer: "3/4"
        },
        {
          id: 3,
          content: "Problem 3: A bag contains 4 red balls and 6 blue balls. A ball is drawn at random, replaced, and a second ball is drawn. Find P(Both Red).",
          solution: "Independent events with replacement:\nP(Red) = 4/10 = 2/5.\nP(Both Red) = (2/5) × (2/5) = 4/25.",
          answer: "4/25"
        },
        {
          id: 4,
          content: "Problem 4: Using the same bag (4 red, 6 blue), two balls are drawn WITHOUT replacement. Find P(Both Red).",
          solution: "Dependent events without replacement:\nFirst Red = 4/10; Second Red = 3/9.\nP(Both Red) = (4/10) × (3/9) = (2/5) × (1/3) = 2/15.",
          answer: "2/15"
        },
        {
          id: 5,
          content: "Problem 5: From the same bag (4 red, 6 blue) drawn WITHOUT replacement, find P(One Red and One Blue in any order).",
          solution: "P(Red then Blue) = (4/10) × (6/9) = 24/90 = 4/15.\nP(Blue then Red) = (6/10) × (4/9) = 24/90 = 4/15.\nTotal P = 4/15 + 4/15 = 8/15.",
          answer: "8/15"
        },
        {
          id: 6,
          content: "Problem 6: If A and B are independent events with P(A) = 0.4 and P(B) = 0.5, find P(A ∩ B).",
          solution: "For independent events: P(A ∩ B) = P(A) × P(B) = 0.4 × 0.5 = 0.2.",
          answer: "0.2"
        },
        {
          id: 7,
          content: "Problem 7: If A and B are mutually exclusive events with P(A) = 0.3 and P(B) = 0.4, find P(A ∪ B).",
          solution: "For mutually exclusive events: P(A ∪ B) = P(A) + P(B) = 0.3 + 0.4 = 0.7.",
          answer: "0.7"
        },
        {
          id: 8,
          content: "Problem 8: The probability that it rains tomorrow is 0.35. What is the probability that it does NOT rain tomorrow?",
          solution: "P(Not Rain) = 1 - P(Rain) = 1 - 0.35 = 0.65.",
          answer: "0.65"
        },
        {
          id: 9,
          content: "Problem 9: A card is drawn at random from a standard deck of 52 playing cards. Find the probability of drawing a King or a Spade.",
          solution: "P(King) = 4/52, P(Spade) = 13/52, P(King of Spades) = 1/52.\nP(King ∪ Spade) = 4/52 + 13/52 - 1/52 = 16/52 = 4/13.",
          answer: "4/13"
        },
        {
          id: 10,
          content: "Problem 10: In a box of 10 chocolates, 3 are dark and 7 are milk. Two chocolates are eaten at random. Find P(At least one is dark).",
          solution: "P(At least 1 dark) = 1 - P(Neither is dark) = 1 - P(Both Milk).\nP(Both Milk) = (7/10) × (6/9) = 42/90 = 7/15.\nP(At least 1 dark) = 1 - 7/15 = 8/15.",
          answer: "8/15"
        },
        {
          id: 11,
          content: "Problem 11: A fair coin is tossed 3 times. Find P(Exactly 2 Heads).",
          solution: "Outcomes with 2 Heads: {HHT, HTH, THH} → 3 outcomes.\nTotal outcomes = 2³ = 8.\nProbability = 3/8.",
          answer: "3/8"
        },
        {
          id: 12,
          content: "Problem 12: A fair coin is tossed 3 times. Find P(All 3 are Heads).",
          solution: "Outcome: {HHH} → 1 outcome.\nProbability = 1/8.",
          answer: "1/8"
        },
        {
          id: 13,
          content: "Problem 13: Two fair dice are rolled. Find P(Sum of scores equals 7).",
          solution: "Favorable pairs: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) → 6 pairs.\nTotal outcomes = 36.\nProbability = 6/36 = 1/6.",
          answer: "1/6"
        },
        {
          id: 14,
          content: "Problem 14: Two fair dice are rolled. Find P(Sum of scores is greater than 10).",
          solution: "Favorable pairs: (5,6), (6,5), (6,6) → 3 pairs.\nProbability = 3/36 = 1/12.",
          answer: "1/12"
        },
        {
          id: 15,
          content: "Problem 15: Probability that John passes test is 0.8. Probability that Mary passes is 0.7. Assuming independence, find P(Both pass).",
          solution: "P(Both pass) = 0.8 × 0.7 = 0.56.",
          answer: "0.56"
        },
        {
          id: 16,
          content: "Problem 16: Using data from Problem 15, find P(Neither passes).",
          solution: "P(John fails) = 0.2; P(Mary fails) = 0.3.\nP(Neither passes) = 0.2 × 0.3 = 0.06.",
          answer: "0.06"
        },
        {
          id: 17,
          content: "Problem 17: Using data from Problem 15, find P(Only one passes).",
          solution: "P(John passes, Mary fails) = 0.8 × 0.3 = 0.24.\nP(John fails, Mary passes) = 0.2 × 0.7 = 0.14.\nTotal = 0.24 + 0.14 = 0.38.",
          answer: "0.38"
        },
        {
          id: 18,
          content: "Problem 18: A bag has 5 green and 3 yellow marbles. Two marbles drawn with replacement. Find P(Different colors).",
          solution: "P(GY) = (5/8) × (3/8) = 15/64.\nP(YG) = (3/8) × (5/8) = 15/64.\nTotal = 30/64 = 15/32.",
          answer: "15/32"
        },
        {
          id: 19,
          content: "Problem 19: State the sum of probabilities of all possible mutually exclusive events in a sample space.",
          solution: "The total sum of probabilities of all outcomes in any sample space is always equal to 1.",
          answer: "1"
        },
        {
          id: 20,
          content: "Problem 20: If P(E) = 0, event E is described as _____.",
          solution: "An event with a probability of 0 cannot happen and is termed an impossible event.",
          answer: "An impossible event"
        }
      ]
    },
    {
      id: "l9_dang5",
      name: "Topic 5: Vectors in Geometry & Proofs",
      questions: [
        {
          id: 1,
          content: "Problem 1: In △OAB, OA = **a** and OB = **b**. Point M is the midpoint of AB. Express AB in terms of **a** and **b**.",
          solution: "**AB** = **AO** + **OB** = -**a** + **b** = **b** - **a**.",
          answer: "b - a"
        },
        {
          id: 2,
          content: "Problem 2: Express position vector OM from Problem 1 in terms of **a** and **b**.",
          solution: "**OM** = **OA** + **AM** = **a** + (1/2)(**b** - **a**) = (1/2)**a** + (1/2)**b** = 1/2(**a** + **b**).",
          answer: "1/2(a + b)"
        },
        {
          id: 3,
          content: "Problem 3: In △OAB, C lies on AB such that AC : CB = 2 : 1. Express OC in terms of **a** and **b** where OA=**a**, OB=**b**.",
          solution: "**AB** = **b** - **a**.\n**AC** = (2/3)(**b** - **a**).\n**OC** = **OA** + **AC** = **a** + (2/3)**b** - (2/3)**a** = (1/3)**a** + (2/3)**b**.",
          answer: "1/3 a + 2/3 b"
        },
        {
          id: 4,
          content: "Problem 4: If vector **PQ** = 3 **QR**, what can be deduced about line segments PQ and QR?",
          solution: "**PQ** and **QR** are scalar multiples, so they are parallel. Since they share point Q, P, Q, R are collinear.",
          answer: "P, Q, R are collinear and PQ = 3 QR"
        },
        {
          id: 5,
          content: "Problem 5: In parallelogram OABC, OA = **a** and OC = **c**. N is a point on AB such that AN : NB = 1 : 2. Express ON in terms of **a** and **c**.",
          solution: "**AB** = **OC** = **c**.\n**AN** = (1/3)**c**.\n**ON** = **OA** + **AN** = **a** + (1/3)**c**.",
          answer: "a + 1/3 c"
        },
        {
          id: 6,
          content: "Problem 6: Given **u** = [k, 8]ᵀ and **v** = [3, 12]ᵀ. If **u** is parallel to **v**, find k.",
          solution: "Parallel vectors ratio: k / 3 = 8 / 12 → k / 3 = 2 / 3 → k = 2.",
          answer: "2"
        },
        {
          id: 7,
          content: "Problem 7: Position vectors of A and B are **a** and **b**. Express vector **BA**.",
          solution: "**BA** = **OA** - **OB** = **a** - **b**.",
          answer: "a - b"
        },
        {
          id: 8,
          content: "Problem 8: Given **OP** = 2**a** + 3**b** and **OQ** = 6**a** + 9**b**. Find scalar k such that **OQ** = k **OP**.",
          solution: "**OQ** = 3(2**a** + 3**b**) = 3 **OP**. Thus, k = 3.",
          answer: "3"
        },
        {
          id: 9,
          content: "Problem 9: From Problem 8, state the geometric relationship between lines OP and OQ.",
          solution: "Since **OQ** = 3 **OP** and both share origin O, points O, P, Q are collinear (lie on the same straight line).",
          answer: "O, P, Q are collinear"
        },
        {
          id: 10,
          content: "Problem 10: In quadrilateral ABCD, **AB** = **dc** = **u**. What special type of quadrilateral is ABCD?",
          solution: "Since **AB** = **DC**, opposite sides are equal and parallel. ABCD is a parallelogram.",
          answer: "Parallelogram"
        },
        {
          id: 11,
          content: "Problem 11: Express **a** - 2(**a** - 3**b**) in simplified vector form.",
          solution: "**a** - 2**a** + 6**b** = -**a** + 6**b** = 6**b** - **a**.",
          answer: "6b - a"
        },
        {
          id: 12,
          content: "Problem 12: Given **OA** = [4, 2]ᵀ and **OB** = [1, 6]ᵀ, find the magnitude |**AB**|.",
          solution: "**AB** = [1-4, 6-2]ᵀ = [-3, 4]ᵀ.\n|**AB**| = √[(-3)² + 4²] = √(9 + 16) = √25 = 5 units.",
          answer: "5 units"
        },
        {
          id: 13,
          content: "Problem 13: Midpoint of segment AB has position vector **OM**. Express **b** in terms of **a** and **m**.",
          solution: "**m** = (1/2)(**a** + **b**) → 2**m** = **a** + **b** → **b** = 2**m** - **a**.",
          answer: "2m - a"
        },
        {
          id: 14,
          content: "Problem 14: Given **a** = [3, -1]ᵀ and **b** = [-6, 2]ᵀ. Are vectors **a** and **b** parallel? Explain.",
          solution: "**b** = -2[3, -1]ᵀ = -2**a**. Since **b** is a scalar multiple of **a**, they are parallel.",
          answer: "Yes, b = -2a"
        },
        {
          id: 15,
          content: "Problem 15: If **AX** = (3/5) **AB**, find the ratio AX : XB.",
          solution: "AX is 3 parts out of 5 total parts of AB.\nXB = 5 - 3 = 2 parts.\nRatio AX : XB = 3 : 2.",
          answer: "3 : 2"
        },
        {
          id: 16,
          content: "Problem 16: In △OAB, G is the centroid. Express OG in terms of **a** and **b** where OA=**a**, OB=**b**.",
          solution: "The position vector of centroid G of △OAB (with origin O) is 1/3(**OA** + **OB**) = 1/3(**a** + **b**).",
          answer: "1/3(a + b)"
        },
        {
          id: 17,
          content: "Problem 17: If vector **v** = 3**i** + 4**j**, find the unit vector in direction of **v**.",
          solution: "|**v**| = √(3² + 4²) = 5.\nUnit vector = (1/5)(3**i** + 4**j**) = 3/5 **i** + 4/5 **j**.",
          answer: "3/5 i + 4/5 j"
        },
        {
          id: 18,
          content: "Problem 18: If **AB** = **c** and **BC** = 2**c**, find ratio of area of △PAB to △PBC if P is any point not on line AC.",
          solution: "Triangles PAB and PBC share same height perpendicular to base AC.\nRatio of areas = Ratio of bases = AB : BC = 1 : 2.",
          answer: "1 : 2"
        },
        {
          id: 19,
          content: "Problem 19: Simplify: **AB** + **BC** + **CD**.",
          solution: "By vector addition triangle law: **AB** + **BC** = **AC**, then **AC** + **CD** = **AD**.",
          answer: "AD"
        },
        {
          id: 20,
          content: "Problem 20: Simplify: **AB** + **BA**.",
          solution: "**AB** + **BA** = **AA** = **0** (Zero vector).",
          answer: "0 (Zero vector)"
        }
      ]
    }
  ]
};
