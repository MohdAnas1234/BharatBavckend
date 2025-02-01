Project Directory Structure
faq-backend/
│
├── config/                  # Configuration files
│   ├── db.js                # MongoDB connection setup
│
├── controllers/             # API logic
│   ├── faqController.js     # FAQ handling functions
│
├── models/                  # Mongoose schemas
│   ├── faq.model.js         # FAQ schema with multilingual support
│
├── routes/                  # API routes
│   ├── faq.routes.js        # Routes for FAQ endpoints
│
├── .env                     # Environment variables
├── app.js                   # Main Express server
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
🛠️ Installation Guide
1️⃣ Clone the Repository

git clone https://github.com/yourusername/faq-backend.git
cd faq-backend
2️⃣ Install Dependencies

npm install
3️⃣ Configure Environment Variables
Create a .env file in the project root and add the following:

MONGO_URI=mongodb://localhost:27017/faqdb
PORT=5000
4️⃣ Start MongoDB Locally
If using MongoDB locally, start the service:

mongod --dbpath /data/db
If using MongoDB Atlas, ensure your MONGO_URI in .env is correct.

5️⃣ Start the Server

npm run dev
The API should now be running at http://localhost:5000 🚀

📡 API Endpoints
1️⃣ Create an FAQ
POST /api/faqs
Request Body (JSON):
{
  "translations": {
    "en": {
      "question": "What is Node.js?",
      "answer": "<p>Node.js is a JavaScript runtime built on Chrome's V8 engine.</p>"
    }
  }
}
Response (201 Created):


{
  "_id": "65a1234567bcd890ef123456",
  "translations": {
    "en": {
      "question": "What is Node.js?",
      "answer": "<p>Node.js is a JavaScript runtime built on Chrome's V8 engine.</p>"
    }
  },
  "createdAt": "2024-02-02T12:34:56.789Z"
}
2️⃣ Get All FAQs
GET /api/faqs
Response (200 OK):


[
  {
    "_id": "65a1234567bcd890ef123456",
    "translations": {
      "en": {
        "question": "What is Node.js?",
        "answer": "<p>Node.js is a JavaScript runtime built on Chrome's V8 engine.</p>"
      }
    },
    "createdAt": "2024-02-02T12:34:56.789Z"
  }
]
🛠️ Technologies Used
Node.js - JavaScript runtime
Express.js - Web framework
MongoDB + Mongoose - Database & ORM
dotenv - Environment variable management
CORS - Cross-Origin Resource Sharing
🤝 Contribution Guidelines
📌 Steps to Contribute:
Fork the repository
Clone your forked repository:

git clone https://github.com/MohdAnas1234/BharatBavckend
Create a new branch for your feature:

git checkout -b feature-name
Make changes and commit:

git add .
git commit -m "First commit"
Push to GitHub:

git push origin -M main
