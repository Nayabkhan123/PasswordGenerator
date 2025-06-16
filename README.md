# 🔐 Password Generator

A powerful and customizable password generator web app built with **HTML**, **CSS**, and **JavaScript**. This tool allows users to generate strong, secure passwords based on various character type selections and length, complete with a password strength indicator and copy functionality.

## ✨ Features

- ✅ Adjustable password length (1 to 20)
- 🔠 Choose from:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Symbols
- 💪 Real-time password strength indicator (Weak, Medium, Strong)
- 📋 Copy to clipboard functionality
- 🧼 Clear password button
- 🖥️ Responsive design for all screen sizes

---

## 🚀 Demo

👉 [Live Demo](https://nayabkhan123.github.io/PasswordGenerator/)  

---

## 🛠️ Technologies Used

- **HTML5** – Semantic structure
- **CSS3** – Styling and responsive layout
- **JavaScript (Vanilla)** – Interactive functionality

---

## 📁 Project Structure

password-generator/
├── index.html       # HTML structure
├── index.css        # CSS styles
├── index.js         # JavaScript logic
└── README.md        # Project documentation



---

### 🔍 Password Generation Logic

- Ensures at least **one character from each selected type** is included
- Uses the **Fisher-Yates Shuffle Algorithm** to randomize the final password
- Password strength is determined based on:
  - Total length
  - Variety of character types:
    - Uppercase letters
    - Lowercase letters
    - Numbers
    - Symbols
