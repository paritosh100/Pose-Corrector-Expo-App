# Pose Corrector App

A React Native + Expo Dev Client project for real-time exercise form correction using computer vision.  
Built with **Expo SDK 54**, **VisionCamera**, and **TensorFlow Lite** for on-device pose detection.

---

## 📦 Dependencies Installed

Core Expo / React Native:
- `react-native-vision-camera` — camera access & frame processors
- `react-native-reanimated` — animations & frame processor runtime
- `react-native-gesture-handler` — gesture support
- `react-native-svg` — overlay for drawing keypoints/angles
- `@shopify/react-native-skia` — optional high-performance graphics

Pose Detection:
- `react-native-fast-tflite` — run TensorFlow Lite models on-device
- `vision-camera-resize-plugin` — resize frames before inference for speed

Expo Utilities:
- `expo-build-properties` — configure Gradle (Kotlin, JitPack, etc.)

---

## ⚙️ Project Setup

1. **Clone repo & install dependencies**
   ```
   npm install
    ```
## Prebuild native projects (required for Dev Client)

`
npx expo prebuild --clean
` 
## Run on device/emulator

```
npx expo run:android   # for Android
npx expo run:ios       # for iOS (on macOS)
```

## 📂 Project Structure
```
├── src/
│   ├── screens/
│   │   └── CameraScreen.tsx   # live camera + pose overlay (WIP)
│   ├── pose/
│   │   └── poseModel.ts       # TensorFlow Lite model loader (WIP)
│   └── lib/
│       └── angles.ts          # joint angle calculation helper
├── assets/
│   └── models/                # TFLite pose model (to be added)
├── app.json                   # Expo config (with build plugins)
├── babel.config.js            # Reanimated plugin config
├── package.json
├── .gitignore
└── README.md
```
## 🚀 Current Progress
1. ✅ Expo SDK 54 project initialized

2. ✅ Dev Client environment set up

3. ✅ Dependencies installed (VisionCamera, TFLite, Reanimated, etc.)

4. ✅ `.gitignore` created for Expo/React Native

## ⏳ Next steps:

- Add CameraScreen with live pose detection

- Load MediaPipe Pose TFLite model

- Overlay keypoints & compute joint angles

 - Add exercise-specific feedback (squats, push-ups, etc.)

## 🛠️ Next Steps
Download a MediaPipe Pose Landmarker Lite TFLite model and place it in `assets/models/`.

Wire CameraScreen.tsx to run inference on each frame and draw detected keypoints.

Implement a simple rep counter + form quality meter.

Add navigation: `Home → Camera → History`.

---