# ⚡ Modern Developer Portfolio

![Project Preview](public/preview.png)

> A high-performance, interactive, and responsive portfolio website built with the "Electric Ocean" aesthetic. Designed to showcase skills, projects, and professional identity with a cinematic touch.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

## ✨ Features

* **Cinematic Preloader:** A "Grand Opening" entry animation with a slide-up curtain effect.
* **Electric Ocean Theme:** A consistent dark mode aesthetic using Deep Black (`#050505`), Electric Blue, and Cyan accents.
* **Smooth Physics Scrolling:** Integrated **Lenis** for a luxurious, inertia-based scrolling experience.
* **Interactive 3D Elements:** 3D Tilt cards in the Hero section and hover-responsive elements.
* **Bento & Grid Layouts:** Modern, clean layouts for the About and Skills sections.
* **GitHub Integration:** Live contribution graph using `react-github-calendar`.
* **Fully Responsive:** optimized for Mobile, Tablet, and Desktop.

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | React.js (Vite) |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion |
| **Scrolling** | Lenis |
| **Icons** | React Icons (Fa, Si) |
| **Data Viz** | React GitHub Calendar |

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

* Node.js (v16 or higher)
* npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/username/repo-name.git](https://github.com/username/repo-name.git)
    cd repo-name
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open in browser**
    Visit `http://localhost:5173` to view the app.

## 📂 Project Structure

## 🎨 Customization Guide

### 1. Changing Content
All text content is located directly within the component files in `src/components/`. You can edit the arrays (e.g., `projectsList`, `certificates`) to update your data.

### 2. Changing the Profile Picture
Replace the image file at:
`src/assets/images/fotoku.jpg`

### 3. Setting up GitHub Calendar
Go to `src/components/About.jsx` and change the username variable:
```javascript
const githubUsername = "YourUsername";

### 💡 Tips Tambahan:

1.  **Ambil Screenshot:** Buka website portofolio kamu yang sudah jadi, lalu ambil screenshot halaman depannya (Hero Section). Simpan gambar tersebut dengan nama `preview.png` dan masukkan ke dalam folder `public` di projek kamu. Ini agar gambar preview muncul di GitHub.
2.  **Sesuaikan Link:** Jangan lupa ganti link `git clone` dan link GitHub di bagian footer README dengan link asli repositori kamu nanti.

Semoga portofolio ini membantu karirmu sebagai Fullstack Developer\! Hasilnya pasti keren banget sekarang. 🚀