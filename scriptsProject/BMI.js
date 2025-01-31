function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
  
    let category;
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obesity";
    }

    return `BMI: ${bmi.toFixed(2)} - Category: ${category}`;
  }
  
  // Example usage:
  console.log(calculateBMI(80, 1.85));
  console.log(calculateBMI(97, 1.90));

  