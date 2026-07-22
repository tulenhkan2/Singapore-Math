export const lop8 = {
  title: "Grade 8 / Secondary 3 Mathematics (Singapore Curriculum)",
  topics: [
    {
      id: "l8_dang1",
      name: "Topic 1: Quadratic Equations, Functions & Inequalities",
      questions: [
        {
          id: 1,
          content: "Problem 1: Solve the quadratic equation by factorisation: 2x² - 5x - 3 = 0.",
          solution: "Factorise the quadratic: (2x + 1)(x - 3) = 0.\nSet each factor to 0: 2x + 1 = 0 or x - 3 = 0 → x = -1/2 or x = 3.",
          answer: "x = -1/2, x = 3"
        },
        {
          id: 2,
          content: "Problem 2: Solve x² + 6x - 2 = 0 by completing the square.",
          solution: "x² + 6x = 2 → (x + 3)² - 9 = 2 → (x + 3)² = 11 → x + 3 = ±√11 → x = -3 ± √11.",
          answer: "x = -3 + √11, x = -3 - √11"
        },
        {
          id: 3,
          content: "Problem 3: Use the quadratic formula to solve 3x² - 4x - 2 = 0, giving your answer to 2 decimal places.",
          solution: "a = 3, b = -4, c = -2.\nx = [-(-4) ± √((-4)² - 4(3)(-2))] / (2 × 3) = [4 ± √(16 + 24)] / 6 = [4 ± √40] / 6.\nx ≈ 1.72 or x ≈ -0.39.",
          answer: "x ≈ 1.72, x ≈ -0.39"
        },
        {
          id: 4,
          content: "Problem 4: Determine the nature of the roots of 2x² - 3x + 5 = 0 using the discriminant.",
          solution: "Discriminant Δ = b² - 4ac = (-3)² - 4(2)(5) = 9 - 40 = -31.\nSince Δ < 0, the equation has no real roots.",
          answer: "No real roots"
        },
        {
          id: 5,
          content: "Problem 5: Find the value(s) of k for which x² + kx + 9 = 0 has two equal real roots.",
          solution: "For equal roots, Δ = 0 → k² - 4(1)(9) = 0 → k² - 36 = 0 → k = ±6.",
          answer: "k = 6, k = -6"
        },
        {
          id: 6,
          content: "Problem 6: Express x² - 8x + 20 in the form (x - a)² + b.",
          solution: "x² - 8x + 20 = (x - 4)² - 16 + 20 = (x - 4)² + 4.",
          answer: "(x - 4)² + 4"
        },
        {
          id: 7,
          content: "Problem 7: Find the minimum value of the quadratic function f(x) = x² - 6x + 13 and the value of x at which it occurs.",
          solution: "Complete the square: f(x) = (x - 3)² - 9 + 13 = (x - 3)² + 4.\nSince (x - 3)² ≥ 0, minimum value is 4 when x = 3.",
          answer: "Minimum value = 4 at x = 3"
        },
        {
          id: 8,
          content: "Problem 8: Solve the quadratic inequality x² - 5x + 6 < 0.",
          solution: "Factorise: (x - 2)(x - 3) < 0.\nThe roots are 2 and 3. For the product to be negative, x must lie between 2 and 3.",
          answer: "2 < x < 3"
        },
        {
          id: 9,
          content: "Problem 9: Solve the inequality x² - 4x - 5 ≥ 0.",
          solution: "Factorise: (x - 5)(x + 1) ≥ 0.\nThe roots are -1 and 5. For product ≥ 0, x ≤ -1 or x ≥ 5.",
          answer: "x ≤ -1 or x ≥ 5"
        },
        {
          id: 10,
          content: "Problem 10: State the line of symmetry for the parabola y = 2(x - 4)² + 7.",
          solution: "The vertex is at (4, 7). The line of symmetry passes through x-coordinate of the vertex.",
          answer: "x = 4"
        },
        {
          id: 11,
          content: "Problem 11: Solve: 4x² - 9 = 0.",
          solution: "(2x - 3)(2x + 3) = 0 → 2x = 3 or 2x = -3 → x = 1.5 or x = -1.5.",
          answer: "x = 1.5, x = -1.5"
        },
        {
          id: 12,
          content: "Problem 12: Find the coordinates of the turning point of y = -x² + 4x + 1 and state whether it is a maximum or minimum.",
          solution: "y = -(x² - 4x) + 1 = -[(x - 2)² - 4] + 1 = -(x - 2)² + 5.\nTurning point is (2, 5). Since coefficient of x² is negative, it is a maximum.",
          answer: "Maximum point (2, 5)"
        },
        {
          id: 13,
          content: "Problem 13: Find the range of k such that x² + 4x + k > 0 for all real values of x.",
          solution: "For expression to be strictly positive, Δ < 0 → 4² - 4(1)(k) < 0 → 16 - 4k < 0 → 4k > 16 → k > 4.",
          answer: "k > 4"
        },
        {
          id: 14,
          content: "Problem 14: Solve the simultaneous equations: y = x² - 3x + 2 and y = 2x - 4.",
          solution: "Set equal: x² - 3x + 2 = 2x - 4 → x² - 5x + 6 = 0 → (x - 2)(x - 3) = 0.\nx = 2 → y = 0; x = 3 → y = 2.",
          answer: "(2, 0) and (3, 2)"
        },
        {
          id: 15,
          content: "Problem 15: Find the x-intercepts of the graph y = 3x² + 5x - 2.",
          solution: "Set y = 0: 3x² + 5x - 2 = 0 → (3x - 1)(x + 2) = 0 → x = 1/3 or x = -2.",
          answer: "(1/3, 0) and (-2, 0)"
        },
        {
          id: 16,
          content: "Problem 16: Solve by completing the square: 2x² + 8x - 10 = 0.",
          solution: "Divide by 2: x² + 4x - 5 = 0 → (x + 2)² - 4 - 5 = 0 → (x + 2)² = 9 → x + 2 = ±3 → x = 1 or x = -5.",
          answer: "x = 1, x = -5"
        },
        {
          id: 17,
          content: "Problem 17: Solve: x(x - 6) = 16.",
          solution: "x² - 6x - 16 = 0 → (x - 8)(x + 2) = 0 → x = 8 or x = -2.",
          answer: "x = 8, x = -2"
        },
        {
          id: 18,
          content: "Problem 18: Calculate the discriminant of 4x² - 12x + 9 = 0.",
          solution: "Δ = b² - 4ac = (-12)² - 4(4)(9) = 144 - 144 = 0.",
          answer: "0"
        },
        {
          id: 19,
          content: "Problem 19: Solve: 2x² - 7x + 3 ≤ 0.",
          solution: "(2x - 1)(x - 3) ≤ 0 → Roots are 1/2 and 3.\nSolution range: 1/2 ≤ x ≤ 3.",
          answer: "1/2 ≤ x ≤ 3"
        },
        {
          id: 20,
          content: "Problem 20: A rectangular garden has length (x + 3) m and width (x - 1) m. If the area is 32 m², find x.",
          solution: "(x + 3)(x - 1) = 32 → x² + 2x - 3 = 32 → x² + 2x - 35 = 0 → (x + 7)(x - 5) = 0.\nSince length must be positive, x = 5.",
          answer: "x = 5"
        }
      ]
    },
    {
      id: "l8_dang2",
      name: "Topic 2: Indices, Surds & Logarithms",
      questions: [
        {
          id: 1,
          content: "Problem 1: Simplify: (2x³y²)³ ÷ (4x²y⁴)",
          solution: "(8x⁹y⁶) / (4x²y⁴) = 2x^(9-2) y^(6-4) = 2x⁷y².",
          answer: "2x⁷y²"
        },
        {
          id: 2,
          content: "Problem 2: Evaluate: 27^(2/3)",
          solution: "27^(2/3) = (27^(1/3))² = (3)² = 9.",
          answer: "9"
        },
        {
          id: 3,
          content: "Problem 3: Evaluate: 16^(-3/4)",
          solution: "16^(-3/4) = 1 / (16^(3/4)) = 1 / (2³) = 1/8.",
          answer: "1/8"
        },
        {
          id: 4,
          content: "Problem 4: Solve the exponential equation: 4^(x + 1) = 32.",
          solution: "(2²)^(x + 1) = 2⁵ → 2^(2x + 2) = 2⁵ → 2x + 2 = 5 → 2x = 3 → x = 1.5.",
          answer: "x = 1.5"
        },
        {
          id: 5,
          content: "Problem 5: Simplify: √75 + √12 - √27",
          solution: "√(25×3) + √(4×3) - √(9×3) = 5√3 + 2√3 - 3√3 = 4√3.",
          answer: "4√3"
        },
        {
          id: 6,
          content: "Problem 6: Rationalise the denominator: 6 / √3",
          solution: "(6 × √3) / (√3 × √3) = 6√3 / 3 = 2√3.",
          answer: "2√3"
        },
        {
          id: 7,
          content: "Problem 7: Rationalise the denominator: 4 / (3 - √5)",
          solution: "[4(3 + √5)] / [(3 - √5)(3 + √5)] = [4(3 + √5)] / (9 - 5) = [4(3 + √5)] / 4 = 3 + √5.",
          answer: "3 + √5"
        },
        {
          id: 8,
          content: "Problem 8: Expand and simplify: (3 + √2)(4 - √2)",
          solution: "3(4) - 3√2 + 4√2 - (√2)² = 12 + √2 - 2 = 10 + √2.",
          answer: "10 + √2"
        },
        {
          id: 9,
          content: "Problem 9: Solve: 3^(2x - 1) = 1 / 27",
          solution: "3^(2x - 1) = 3⁻³ → 2x - 1 = -3 → 2x = -2 → x = -1.",
          answer: "x = -1"
        },
        {
          id: 10,
          content: "Problem 10: Express in single logarithmic form: log₂ 5 + log₂ 4 - log₂ 2",
          solution: "log₂ [(5 × 4) / 2] = log₂ (20 / 2) = log₂ 10.",
          answer: "log₂ 10"
        },
        {
          id: 11,
          content: "Problem 11: Evaluate: log₃ 81",
          solution: "Let log₃ 81 = x → 3ˣ = 81 = 3⁴ → x = 4.",
          answer: "4"
        },
        {
          id: 12,
          content: "Problem 12: Solve for x: log₂ (x + 3) = 4",
          solution: "x + 3 = 2⁴ → x + 3 = 16 → x = 13.",
          answer: "x = 13"
        },
        {
          id: 13,
          content: "Problem 13: Solve for x: log x + log(x - 3) = 1 (base 10)",
          solution: "log [x(x - 3)] = 1 → x(x - 3) = 10¹ → x² - 3x - 10 = 0 → (x - 5)(x + 2) = 0.\nSince log of negative number is undefined, x = 5.",
          answer: "x = 5"
        },
        {
          id: 14,
          content: "Problem 14: Simplify: (a^(1/2) b³)² ÷ (a⁻¹ b²)",
          solution: "(a¹ b⁶) / (a⁻¹ b²) = a^(1 - (-1)) b^(6 - 2) = a²b⁴.",
          answer: "a²b⁴"
        },
        {
          id: 15,
          content: "Problem 15: Solve for x: 9ˣ - 4(3ˣ) + 3 = 0",
          solution: "Let u = 3ˣ. Then u² - 4u + 3 = 0 → (u - 1)(u - 3) = 0.\nu = 1 → 3ˣ = 1 → x = 0.\nu = 3 → 3ˣ = 3 → x = 1.",
          answer: "x = 0, x = 1"
        },
        {
          id: 16,
          content: "Problem 16: Express √48 in the form a√b where a and b are integers and b is as small as possible.",
          solution: "√48 = √(16 × 3) = 4√3.",
          answer: "4√3"
        },
        {
          id: 17,
          content: "Problem 17: Solve: 2 log₃ x - log₃ (x + 2) = 0",
          solution: "log₃ (x²) = log₃ (x + 2) → x² = x + 2 → x² - x - 2 = 0 → (x - 2)(x + 1) = 0.\nSince x > 0 for log, x = 2.",
          answer: "x = 2"
        },
        {
          id: 18,
          content: "Problem 18: Simplify: (√5 + √2)². ",
          solution: "(√5)² + 2(√5)(√2) + (√2)² = 5 + 2√10 + 2 = 7 + 2√10.",
          answer: "7 + 2√10"
        },
        {
          id: 19,
          content: "Problem 19: Change base to evaluate log₅ 20 using natural logarithms (give answer to 2 d.p.).",
          solution: "log₅ 20 = ln(20) / ln(5) ≈ 2.9957 / 1.6094 ≈ 1.86.",
          answer: "1.86"
        },
        {
          id: 20,
          content: "Problem 20: Solve: 5^(2x + 1) = 1 / 125",
          solution: "5^(2x + 1) = 5⁻³ → 2x + 1 = -3 → 2x = -4 → x = -2.",
          answer: "x = -2"
        }
      ]
    },
    {
      id: "l8_dang3",
      name: "Topic 3: Trigonometry & Bearings",
      questions: [
        {
          id: 1,
          content: "Problem 1: In a right-angled triangle ABC, ∠B = 90°, AB = 3 cm, BC = 4 cm. Find sin A.",
          solution: "Hypotenuse AC = √(3² + 4²) = 5 cm.\nsin A = Opposite / Hypotenuse = BC / AC = 4 / 5.",
          answer: "4/5"
        },
        {
          id: 2,
          content: "Problem 2: In △ABC, ∠B = 90°, AC = 10 cm and ∠A = 30°. Find the length of BC.",
          solution: "sin 30° = BC / AC → 0.5 = BC / 10 → BC = 5 cm.",
          answer: "5 cm"
        },
        {
          id: 3,
          content: "Problem 3: In △ABC, a = 7 cm, b = 8 cm, and c = 9 cm. Use the Cosine Rule to find ∠A to 1 d.p.",
          solution: "a² = b² + c² - 2bc cos A → 7² = 8² + 9² - 2(8)(9) cos A → 49 = 64 + 81 - 144 cos A.\n144 cos A = 96 → cos A = 96 / 144 = 2/3 → ∠A = cos⁻¹(2/3) ≈ 48.2°.",
          answer: "48.2°"
        },
        {
          id: 4,
          content: "Problem 4: In △PQR, ∠P = 40°, ∠Q = 60°, and p = 10 cm. Use the Sine Rule to find length q (opposite ∠Q) to 2 d.p.",
          solution: "q / sin Q = p / sin P → q / sin 60° = 10 / sin 40° → q = (10 × sin 60°) / sin 40° ≈ 13.47 cm.",
          answer: "13.47 cm"
        },
        {
          id: 5,
          content: "Problem 5: Find the area of △ABC where a = 6 cm, b = 10 cm, and included angle ∠C = 30°.",
          solution: "Area = (1/2) a b sin C = (1/2)(6)(10) sin 30° = 30 × 0.5 = 15 cm².",
          answer: "15 cm²"
        },
        {
          id: 6,
          content: "Problem 6: The bearing of B from A is 065°. Find the bearing of A from B.",
          solution: "Back bearing = 065° + 180° = 245°.",
          answer: "245°"
        },
        {
          id: 7,
          content: "Problem 7: The bearing of Y from X is 210°. Find the bearing of X from Y.",
          solution: "Back bearing = 210° - 180° = 030°.",
          answer: "030°"
        },
        {
          id: 8,
          content: "Problem 8: Solve for θ (0° ≤ θ ≤ 300°) in: sin θ = 0.5.",
          solution: "Basic angle α = 30°.\nIn 1st quadrant: θ = 30°.\nIn 2nd quadrant: θ = 180° - 30° = 150°.",
          answer: "30°, 150°"
        },
        {
          id: 9,
          content: "Problem 9: Solve for θ (0° ≤ θ ≤ 360°): cos θ = -0.5.",
          solution: "Basic angle α = 60°.\nCosine is negative in 2nd and 3rd quadrants.\n2nd quadrant: θ = 180° - 60° = 120°.\n3rd quadrant: θ = 180° + 60° = 240°.",
          answer: "120°, 240°"
        },
        {
          id: 10,
          content: "Problem 10: Solve for θ (0° ≤ θ ≤ 360°): tan θ = 1.",
          solution: "Basic angle α = 45°.\nTangent is positive in 1st and 3rd quadrants.\n1st quadrant: θ = 45°.\n3rd quadrant: θ = 180° + 45° = 225°.",
          answer: "45°, 225°"
        },
        {
          id: 11,
          content: "Problem 11: A vertical tower is 50 m high. From a point on level ground, the angle of elevation to the top of the tower is 35°. Find the distance from the point to the base of the tower (to 1 d.p.).",
          solution: "tan 35° = 50 / d → d = 50 / tan 35° ≈ 50 / 0.7002 ≈ 71.4 m.",
          answer: "71.4 m"
        },
        {
          id: 12,
          content: "Problem 12: An observer on top of a 80 m cliff looks down at a boat. The angle of depression is 25°. How far is the boat from the base of the cliff?",
          solution: "tan 25° = 80 / d → d = 80 / tan 25° ≈ 80 / 0.4663 ≈ 171.6 m.",
          answer: "171.6 m"
        },
        {
          id: 13,
          content: "Problem 13: In △XYZ, x = 5 cm, y = 12 cm, z = 13 cm. Find the value of cos Y.",
          solution: "Check if right triangle: 5² + 12² = 25 + 144 = 169 = 13². Yes, right-angled at Z.\ncos Y = Adjacent / Hypotenuse = y-side / z-side = 12 / 13.",
          answer: "12/13"
        },
        {
          id: 14,
          content: "Problem 14: State the exact value of sin 60° × cos 30°.",
          solution: "sin 60° = √3/2, cos 30° = √3/2.\nProduct = (√3/2) × (√3/2) = 3/4.",
          answer: "3/4"
        },
        {
          id: 15,
          content: "Problem 15: State the exact value of tan 45° + cos 60°.",
          solution: "tan 45° = 1, cos 60° = 1/2.\n1 + 1/2 = 3/2.",
          answer: "3/2"
        },
        {
          id: 16,
          content: "Problem 16: In △ABC, AB = 8 cm, BC = 5 cm, and area = 10 cm². Find the acute angle ∠B.",
          solution: "Area = (1/2) × 8 × 5 × sin B = 20 sin B = 10 → sin B = 0.5 → ∠B = 30°.",
          answer: "30°"
        },
        {
          id: 17,
          content: "Problem 17: A ship sails 10 km Due East, then 10 km Due North. Find the bearing of the ship from its starting position.",
          solution: "Forms an isosceles right triangle.\nAngle north of east = 45°. Bearing from North = 045°.",
          answer: "045°"
        },
        {
          id: 18,
          content: "Problem 18: Find the length of side c in △ABC if a = 4, b = 5, and ∠C = 60°.",
          solution: "c² = a² + b² - 2ab cos C = 4² + 5² - 2(4)(5) cos 60° = 16 + 25 - 40(0.5) = 41 - 20 = 21 → c = √21 ≈ 4.58.",
          answer: "√21"
        },
        {
          id: 19,
          content: "Problem 19: Solve for θ (0° ≤ θ ≤ 180°): 2 sin θ - 1 = 0.",
          solution: "2 sin θ = 1 → sin θ = 0.5 → θ = 30° or 180° - 30° = 150°.",
          answer: "30°, 150°"
        },
        {
          id: 20,
          content: "Problem 20: In △ABC, ∠A = 45°, ∠B = 60°, and a = 8 cm. Find side b in exact surd form.",
          solution: "b / sin 60° = 8 / sin 45° → b = 8 × (√3/2) / (1/√2) = 4√3 × √2 = 4√6 cm.",
          answer: "4√6 cm"
        }
      ]
    },
    {
      id: "l8_dang4",
      name: "Topic 4: Circle Properties & Arc Length / Sector Area",
      questions: [
        {
          id: 1,
          content: "Problem 1: A circle has radius 7 cm. Find the arc length subtended by a central angle of 60° (Take π = 22/7).",
          solution: "Arc length = (θ / 360°) × 2πr = (60 / 360) × 2 × (22/7) × 7 = (1/6) × 44 = 22/3 = 7.33 cm.",
          answer: "22/3 cm"
        },
        {
          id: 2,
          content: "Problem 2: Find the area of a sector of a circle with radius 10 cm and central angle 90° in terms of π.",
          solution: "Sector Area = (θ / 360°) × πr² = (90 / 360) × π × 10² = (1/4) × 100π = 25π cm².",
          answer: "25π cm²"
        },
        {
          id: 3,
          content: "Problem 3: In a circle with centre O, AB is a chord of length 8 cm. The distance from O to AB is 3 cm. Find the radius of the circle.",
          solution: "Perpendicular from centre bisects chord → Half chord = 4 cm.\nIn right triangle: r² = 3² + 4² = 9 + 16 = 25 → r = 5 cm.",
          answer: "5 cm"
        },
        {
          id: 4,
          content: "Problem 4: Angle subtended by an arc at the centre of a circle is 110°. Find the angle subtended by the same arc at the circumference.",
          solution: "Angle at circumference = Angle at centre / 2 = 110° / 2 = 55°.",
          answer: "55°"
        },
        {
          id: 5,
          content: "Problem 5: In a cyclic quadrilateral ABCD, ∠A = 85° and ∠B = 100°. Find ∠C and ∠D.",
          solution: "Opposite angles of a cyclic quadrilateral sum to 180°.\n∠C = 180° - 85° = 95°.\n∠D = 180° - 100° = 80°.",
          answer: "∠C = 95°, ∠D = 80°"
        },
        {
          id: 6,
          content: "Problem 6: AB is a diameter of a circle and C is a point on the circumference. What is the size of ∠ACB?",
          solution: "Angle in a semicircle is a right angle (90°).",
          answer: "90°"
        },
        {
          id: 7,
          content: "Problem 7: A tangent PT touches a circle at T, and O is the centre. If OT = 6 cm and OP = 10 cm, find PT.",
          solution: "Tangent is perpendicular to radius at point of contact → ∠OTP = 90°.\nPT = √(OP² - OT²) = √(10² - 6²) = √64 = 8 cm.",
          answer: "8 cm"
        },
        {
          id: 8,
          content: "Problem 8: Two tangents PA and PB are drawn from an external point P to a circle with centre O. If ∠APB = 40°, find ∠AOB.",
          solution: "Quadrilateral OAPB has right angles at A and B.\n∠AOB = 180° - ∠APB = 180° - 40° = 140°.",
          answer: "140°"
        },
        {
          id: 9,
          content: "Problem 9: Find the perimeter of a sector with radius 12 cm and central angle 60° in terms of π.",
          solution: "Arc length = (60/360) × 2π(12) = 4π cm.\nPerimeter = Arc length + 2r = 4π + 24 cm.",
          answer: "(4π + 24) cm"
        },
        {
          id: 10,
          content: "Problem 10: In a circle, two chords AB and CD intersect at E. If AE = 3 cm, EB = 6 cm, and CE = 2 cm, find ED.",
          solution: "Intersecting Chords Theorem: AE × EB = CE × ED → 3 × 6 = 2 × ED → 18 = 2 ED → ED = 9 cm.",
          answer: "9 cm"
        },
        {
          id: 11,
          content: "Problem 11: An arc of length 15 cm subtends an angle θ at the centre of a circle of radius 10 cm. Find θ in radians.",
          solution: "Arc length s = rθ → 15 = 10θ → θ = 1.5 radians.",
          answer: "1.5 radians"
        },
        {
          id: 12,
          content: "Problem 12: Convert 120° into radians in terms of π.",
          solution: "Radians = 120° × (π / 180°) = 2π / 3.",
          answer: "2π/3 radians"
        },
        {
          id: 13,
          content: "Problem 13: Convert 3π / 4 radians into degrees.",
          solution: "Degrees = (3π / 4) × (180° / π) = 3 × 45° = 135°.",
          answer: "135°"
        },
        {
          id: 14,
          content: "Problem 14: Find the area of a segment of a circle with radius 6 cm and central angle 90° in terms of π.",
          solution: "Sector Area = (90/360) × π(6²) = 9π.\nTriangle Area = (1/2)(6)(6) = 18.\nSegment Area = Sector Area - Triangle Area = 9π - 18 cm².",
          answer: "(9π - 18) cm²"
        },
        {
          id: 15,
          content: "Problem 15: Chords of equal length in a circle are at what distance from the centre?",
          solution: "Chords of equal length are equidistant from the centre.",
          answer: "Equal distance"
        },
        {
          id: 16,
          content: "Problem 16: Angles in the same segment of a circle subtended by the same arc are _____.",
          solution: "By circle theorem, angles in the same segment are equal.",
          answer: "Equal"
        },
        {
          id: 17,
          content: "Problem 17: In a circle with radius 13 cm, a chord is 24 cm long. Find the distance of the chord from the centre.",
          solution: "Half chord = 12 cm.\nDistance d = √(13² - 12²) = √(169 - 144) = √25 = 5 cm.",
          answer: "5 cm"
        },
        {
          id: 18,
          content: "Problem 18: Find the central angle of a sector with area 30π cm² and radius 10 cm.",
          solution: "Area = (θ / 360°) × πr² → 30π = (θ / 360) × 100π → 30 = 5θ / 18 → θ = (30 × 18) / 5 = 108°.",
          answer: "108°"
        },
        {
          id: 19,
          content: "Problem 19: State the angle between a tangent to a circle and the radius drawn to the point of contact.",
          solution: "The tangent is perpendicular to the radius at the point of contact, so angle = 90°.",
          answer: "90°"
        },
        {
          id: 20,
          content: "Problem 20: In △ABC inscribed in a circle, AB is the diameter. If ∠A = 35°, find ∠B.",
          solution: "Since AB is diameter, ∠C = 90°.\n∠B = 180° - 90° - 35° = 55°.",
          answer: "55°"
        }
      ]
    },
    {
      id: "l8_dang5",
      name: "Topic 5: Vectors in Two Dimensions",
      questions: [
        {
          id: 1,
          content: "Problem 1: Given vector **a** = [3, 4]ᵀ, calculate the magnitude |**a**|.",
          solution: "|**a**| = √(3² + 4²) = √(9 + 16) = √25 = 5 units.",
          answer: "5 units"
        },
        {
          id: 2,
          content: "Problem 2: Given **a** = [2, -5]ᵀ and **b** = [-3, 1]ᵀ, find **a** + **b**.",
          solution: "**a** + **b** = [2 + (-3), -5 + 1]ᵀ = [-1, -4]ᵀ.",
          answer: "[-1, -4]ᵀ"
        },
        {
          id: 3,
          content: "Problem 3: Given **a** = [4, -2]ᵀ, find 3**a**.",
          solution: "3**a** = [3×4, 3×(-2)]ᵀ = [12, -6]ᵀ.",
          answer: "[12, -6]ᵀ"
        },
        {
          id: 4,
          content: "Problem 4: Position vector of A is **OA** = [1, 5]ᵀ and position vector of B is **OB** = [7, 2]ᵀ. Find column vector **AB**.",
          solution: "**AB** = **OB** - **OA** = [7 - 1, 2 - 5]ᵀ = [6, -3]ᵀ.",
          answer: "[6, -3]ᵀ"
        },
        {
          id: 5,
          content: "Problem 5: If **u** = [5, 12]ᵀ, find the unit vector in the direction of **u**.",
          solution: "|**u**| = √(5² + 12²) = 13.\nUnit vector = (1/13) [5, 12]ᵀ = [5/13, 12/13]ᵀ.",
          answer: "[5/13, 12/13]ᵀ"
        },
        {
          id: 6,
          content: "Problem 6: Given **p** = [2, k]ᵀ and |**p**| = 10, find the positive value of k.",
          solution: "2² + k² = 10² → 4 + k² = 100 → k² = 96 → k = √96 = 4√6.",
          answer: "4√6"
        },
        {
          id: 7,
          content: "Problem 7: If **AB** = [3, -4]ᵀ, write down the vector **BA**.",
          solution: "**BA** = -**AB** = [-3, 4]ᵀ.",
          answer: "[-3, 4]ᵀ"
        },
        {
          id: 8,
          content: "Problem 8: Given **a** = [2, 3]ᵀ and **b** = [x, 6]ᵀ are parallel vectors, find x.",
          solution: "Since vectors are parallel, **b** = k**a**.\n6 = k(3) → k = 2.\nx = k(2) = 2(2) = 4.",
          answer: "4"
        },
        {
          id: 9,
          content: "Problem 9: In △ABC, M is the midpoint of BC. Express **AM** in terms of **AB** and **AC**.",
          solution: "**BC** = **AC** - **AB** → **BM** = (1/2)(**AC** - **AB**).\n**AM** = **AB** + **BM** = **AB** + (1/2)**AC** - (1/2)**AB** = 1/2 **AB** + 1/2 **AC**.",
          answer: "1/2 AB + 1/2 AC"
        },
        {
          id: 10,
          content: "Problem 10: Find the magnitude of vector [ -8, -15 ]ᵀ.",
          solution: "Magnitude = √[(-8)² + (-15)²] = √(64 + 225) = √289 = 17 units.",
          answer: "17 units"
        },
        {
          id: 11,
          content: "Problem 11: Given **a** = [3, 1]ᵀ and **b** = [-2, 4]ᵀ, find 2**a** - 3**b**.",
          solution: "2[3, 1]ᵀ - 3[-2, 4]ᵀ = [6, 2]ᵀ - [-6, 12]ᵀ = [6 - (-6), 2 - 12]ᵀ = [12, -10]ᵀ.",
          answer: "[12, -10]ᵀ"
        },
        {
          id: 12,
          content: "Problem 12: Points A, B, C have position vectors **a**, **b**, **c**. If **AB** = 2 **BC**, what can be concluded about A, B, C?",
          solution: "**AB** and **BC** are parallel and share point B, so A, B, C are collinear.",
          answer: "Collinear points"
        },
        {
          id: 13,
          content: "Problem 13: Given **OA** = [2, 3]ᵀ and **AB** = [5, -1]ᵀ, find position vector **OB**.",
          solution: "**OB** = **OA** + **AB** = [2 + 5, 3 + (-1)]ᵀ = [7, 2]ᵀ.",
          answer: "[7, 2]ᵀ"
        },
        {
          id: 14,
          content: "Problem 14: If **v** = [k, 3]ᵀ has magnitude 5, find the possible values of k.",
          solution: "k² + 3² = 5² → k² + 9 = 25 → k² = 16 → k = ±4.",
          answer: "k = 4, k = -4"
        },
        {
          id: 15,
          content: "Problem 15: Vector **a** has magnitude 6. What is the magnitude of vector -2**a**?",
          solution: "|-2**a**| = |-2| × |**a**| = 2 × 6 = 12 units.",
          answer: "12 units"
        },
        {
          id: 16,
          content: "Problem 16: O is the origin, P is (4, -7). Write down the position vector **OP** as a column vector.",
          solution: "**OP** = [4, -7]ᵀ.",
          answer: "[4, -7]ᵀ"
        },
        {
          id: 17,
          content: "Problem 17: Express **a** = 3**i** - 4**j** in column vector form.",
          solution: "**a** = [3, -4]ᵀ.",
          answer: "[3, -4]ᵀ"
        },
        {
          id: 18,
          content: "Problem 18: Given **a** = [1, 2]ᵀ and **b** = [3, -1]ᵀ, solve for vector **x** if 2**x** + **a** = **b**.",
          solution: "2**x** = **b** - **a** = [3 - 1, -1 - 2]ᵀ = [2, -3]ᵀ → **x** = [1, -1.5]ᵀ.",
          answer: "[1, -1.5]ᵀ"
        },
        {
          id: 19,
          content: "Problem 19: In parallelogram OABC, **OA** = **a** and **OC** = **c**. Express diagonal vector **OB** in terms of **a** and **c**.",
          solution: "In parallelogram OABC, **AB** = **OC** = **c**.\n**OB** = **OA** + **AB** = **a** + **c**.",
          answer: "a + c"
        },
        {
          id: 20,
          content: "Problem 20: In parallelogram OABC, express diagonal vector **AC** in terms of **a** and **c**.",
          solution: "**AC** = **OC** - **OA** = **c** - **a**.",
          answer: "c - a"
        }
      ]
    }
  ]
};
