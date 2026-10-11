const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const profile = {
  name: "Yeshua Rhema Supangkat",
  bio: "Student focused on Computer Science, Statistics, and Software Engineering.",
  skills: ["Node.js", "Express", "JavaScript", "SQL", "Python", "C++"],
  socials: {
    github: "https://github.com/yeshuarhema",
    linkedin: "https://linkedin.com/in/yeshuarhema"
  }
};

app.get('/', (req, res) => {
  res.json({ message: "Welcome to the Personal Profile API" });
});

app.get('/api/profile', (req, res) => {
  res.json(profile);
});

app.get('/api/skills', (req, res) => {
  res.json(profile.skills);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
