/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: [
        "./App.tsx",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./screens/**/*.{js,jsx,ts,tsx}", // নতুন স্ক্রীন যুক্ত করা
        "./node_modules/nativewind/**/*.js" // NativeWind এর ক্লাসগুলো অন্তর্ভুক্ত করতে
    ],

    presets: [require("nativewind/preset")],
    theme: {
        extend: {},
    },
    plugins: [],
}