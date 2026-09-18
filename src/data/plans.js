// src/data/plans.js

export const plansData = [
  {
    id: "student-offer",
    name: "SPECIAL STUDENT OFFER",
    tagline: "EXCLUSIVE DISCOUNT FOR STUDENTS",
    notice: "Present a valid student ID at registration.",
    isStudentOffer: true,
    featured: false,
    theme: "dark",
    badge: "STUDENT SPECIAL",
    priceText: "SPECIAL PRICE",
    durationText: "UPON VERIFICATION",
    benefits: [
      "Student Discount",
      "Valid Student ID Required",
      "Full Gym Access",
      "Modern Equipment",
      "Certified Trainers",
      "Flexible Workout Hours"
    ],
    buttonText: "REGISTER NOW",
    secondaryButtonText: "ENQUIRE NOW"
  },
  {
    id: "monthly",
    name: "MONTHLY",
    price: "₹2,500",
    duration: "/ MONTH",
    featured: false,
    theme: "light",
    badge: null,
    benefits: [
      "Full Gym Access",
      "Modern Equipment",
      "Certified Trainers",
      "Clean Training Environment",
      "Locker Facilities"
    ],
    buttonText: "JOIN NOW"
  },
  {
    id: "quarterly",
    name: "QUARTERLY",
    price: "₹5,500",
    duration: "/ 3 MONTHS",
    featured: true,
    theme: "gold",
    badge: "MOST POPULAR",
    benefits: [
      "Full Gym Access",
      "Certified Trainers",
      "Basic Nutrition Guidance",
      "Locker Facilities",
      "Progress Guidance",
      "Clean Training Environment"
    ],
    buttonText: "JOIN NOW"
  },
  {
    id: "half-yearly",
    name: "HALF-YEARLY",
    price: "₹9,500",
    duration: "/ 6 MONTHS",
    featured: false,
    theme: "light",
    badge: "BEST VALUE",
    benefits: [
      "Full Gym Access",
      "Modern Equipment",
      "Certified Trainers",
      "Basic Nutrition Guidance",
      "Progress Guidance",
      "Locker Facilities"
    ],
    buttonText: "JOIN NOW"
  },
  {
    id: "yearly",
    name: "YEARLY",
    price: "₹15,000",
    duration: "/ YEAR",
    featured: false,
    theme: "light",
    badge: "ULTIMATE SAVINGS",
    benefits: [
      "Full Gym Access",
      "Certified Trainers",
      "Complete Nutrition Guidance",
      "Flexible Training Support",
      "Locker Facilities",
      "Progress & Transformation Scan"
    ],
    buttonText: "JOIN NOW"
  }
];

export default plansData;
