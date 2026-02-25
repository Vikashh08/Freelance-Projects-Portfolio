# 🐳 Docker Setup – Freelance Projects Portfolio

This project includes a Docker configuration to simplify setup, ensure environment consistency, and make development easier for contributors.  
The container runs the Vite development server using Node.js.

---

## 📦 Prerequisites

Make sure you have the following installed:

- Docker
- Git

Check Docker installation:

```bash
docker --version
⚙️ Build Docker Image

Run this command from the project root directory:

docker build -t dockerimage .

This step will:

Pull the Node.js base image

Install project dependencies

Prepare the Vite + React app inside the container

▶️ Run Docker Container
docker run -p 5173:5173 dockerimage

Now open your browser and visit:

http://localhost:5173
🧠 How It Works

Uses Node.js 20 as the base image

Installs dependencies using npm install

Runs Vite dev server with --host flag

Exposes port 5173 for development

🛑 Stop the Container

Press:

CTRL + C

Or stop manually:

docker ps
docker stop <container_id>
📌 Notes

This Docker setup is intended for development purposes.

For production deployment, consider using a multi-stage Docker build with Nginx for better performance and smaller image size.

👨‍💻 Author

Sunny Kumar – Frontend Developer & Content Creator


If you want, I can also give you a **🔥 advanced README** with:

✅ Docker badge  
✅ Tech stack section  
✅ Project preview  
✅ Contribution guide  

— the kind that looks super professional on GitHub PRs.