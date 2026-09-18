// src/data/gallery.js
// LEO Fitness Pro Gallery dataset using user's actual gym photos (33 photos)

const rawPhotos = [
  { file: 'IMG_0480.jpg', title: 'Strength Training Arena', sub: 'Olympic Barbell & Plate Racks', category: 'STRENGTH' },
  { file: 'IMG_0481.jpg', title: 'Free Weights Zone', sub: 'Calibrated Dumbbell Range', category: 'STRENGTH' },
  { file: 'IMG_0482.jpg', title: 'Commercial Squat Racks', sub: 'Safety Bars & Power Cages', category: 'STRENGTH' },
  { file: 'IMG_0483.jpg', title: 'Personal Training Bay', sub: '1-on-1 Coaching Space', category: 'PERSONAL TRAINING' },
  { file: 'IMG_0484.jpg', title: 'Cardio Deck', sub: 'Treadmills & Endurance Machines', category: 'CARDIO' },
  { file: 'IMG_0485.jpg', title: 'Leg Press & Hack Squat', sub: 'Targeted Lower Body Station', category: 'STRENGTH' },
  { file: 'IMG_0486.jpg', title: 'Cable Crossover Machine', sub: 'Multi-angle Pulley Station', category: 'STRENGTH' },
  { file: 'IMG_0487.jpg', title: 'Upper Body Isolation', sub: 'Chest & Shoulder Press Machines', category: 'STRENGTH' },
  { file: 'IMG_0488.jpg', title: 'Lat Pulldown & Seated Row', sub: 'Back & Core Development', category: 'STRENGTH' },
  { file: 'IMG_0489.jpg', title: 'Stairmasters & Ellipticals', sub: 'High Intensity Conditioning', category: 'CARDIO' },
  { file: 'IMG_0490.jpg', title: 'Functional Turf Track', sub: 'Sled Push & Agility Zone', category: 'FACILITIES' },
  { file: 'IMG_0491.jpg', title: 'Heavy Dumbbell Station', sub: 'Precision Cast Iron Weights', category: 'STRENGTH' },
  { file: 'IMG_0492.jpg', title: 'Executive Locker Rooms', sub: 'Clean Secure Storage & Showers', category: 'FACILITIES' },
  { file: 'IMG_0493.jpg', title: 'Boxing & Strike Area', sub: 'Punching Bags & Speed Balls', category: 'FACILITIES' },
  { file: 'IMG_0494.jpg', title: 'Incline Bench Press', sub: 'Pectoral & Deltoid Strength', category: 'STRENGTH' },
  { file: 'IMG_0495.jpg', title: 'Core & Stretching Area', sub: 'Mat & Mobility Section', category: 'FACILITIES' },
  { file: 'IMG_0496.jpg', title: '1-on-1 Trainer Guidance', sub: 'Form Correction & Spotting', category: 'PERSONAL TRAINING' },
  { file: 'IMG_0497.jpg', title: 'Smith Machine Cage', sub: 'Guided Barbell Workouts', category: 'STRENGTH' },
  { file: 'IMG_0498.jpg', title: 'Spin Bike Studio', sub: 'RPM & Endurance Cycling', category: 'CARDIO' },
  { file: 'IMG_0499.jpg', title: 'Arm Curl & Tricep Extension', sub: 'Bicep & Arm Sculpting', category: 'STRENGTH' },
  { file: 'IMG_0500.jpg', title: 'Preacher Curl Bench', sub: 'Strict Arm Muscle Focus', category: 'STRENGTH' },
  { file: 'IMG_0501.jpg', title: 'Hydration & Supplement Bar', sub: 'Post-Workout Shakes & Water', category: 'FACILITIES' },
  { file: 'IMG_0502.jpg', title: 'Body Composition Scan', sub: 'InBody Assessment & Tracking', category: 'PERSONAL TRAINING' },
  { file: 'IMG_0503.jpg', title: 'Deadlift Platform', sub: 'Bumper Plates & Chalk Station', category: 'STRENGTH' },
  { file: 'IMG_0504.jpg', title: 'Pec Deck Fly Machine', sub: 'Chest Isolation & Stretch', category: 'STRENGTH' },
  { file: 'IMG_0505.jpg', title: 'Hamstring & Calf Station', sub: 'Seated & Lying Leg Curls', category: 'STRENGTH' },
  { file: 'IMG_0506.jpg', title: 'Air Bikes & Rowing', sub: 'Full Body HIIT Conditioning', category: 'CARDIO' },
  { file: 'IMG_0507.jpg', title: 'VIP Personal Locker Area', sub: 'Keycard Access Lockers', category: 'FACILITIES' },
  { file: 'IMG_0508.jpg', title: 'Battle Ropes & Kettlebells', sub: 'Explosive Functional Fitness', category: 'PERSONAL TRAINING' },
  { file: 'IMG_0509.jpg', title: 'Glute Drive Machine', sub: 'Hip Thrust & Lower Body Strength', category: 'STRENGTH' },
  { file: 'IMG_0510.jpg', title: 'Resistance Band Station', sub: 'Mobility & Warm-up Corner', category: 'FACILITIES' },
  { file: 'IMG_0511.jpg', title: 'Gym Atmosphere & Lighting', sub: 'Spacious Air-Conditioned Floor', category: 'FACILITIES' },
  { file: 'IMG_0512.jpg', title: 'Champions Wall & Trophy Display', sub: 'Member Transformation Highlights', category: 'PERSONAL TRAINING' },
];

export const galleryData = rawPhotos.map((photo, index) => ({
  id: index + 1,
  title: photo.title,
  subtitle: photo.sub,
  category: photo.category,
  image: `/gallery/${photo.file}`,
  alt: `LEO Fitness Pro - ${photo.title}`
}));

export default galleryData;
