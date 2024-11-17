const express = require('express');
const app = express();

// Homepage route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to the Homepage</title>
        <style>
            body {
                background-color: #f7f7f7;
                font-family: 'Arial', sans-serif;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                color: #333;
            }

            .welcome-container {
                text-align: center;
                background-color: #ffffff;
                padding: 50px 40px;
                border-radius: 15px;
                box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
                animation: fadeInUp 1.5s ease-out;
            }

            h1 {
                font-size: 4em;
                color: #ff6347;
                margin-bottom: 20px;
                animation: zoomIn 1s ease;
            }

            p {
                font-size: 1.5em;
                margin-bottom: 20px;
                color: #555;
                animation: slideIn 1.5s ease-out;
            }

            a {
                font-size: 1.2em;
                text-decoration: none;
                color: white;
                background-color: #ff6347;
                padding: 15px 30px;
                border-radius: 30px;
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                transition: background-color 0.3s ease;
            }

            a:hover {
                background-color: #e55347;
                cursor: pointer;
            }

            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(50px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes zoomIn {
                from {
                    opacity: 0;
                    transform: scale(0.8);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }

            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateX(-100px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }

            .image-container {
                margin-top: 30px;
                animation: fadeIn 2s ease-out;
            }

            .image-container img {
                width: 200px;
                border-radius: 50%;
                transition: transform 0.3s ease;
            }

            .image-container img:hover {
                transform: scale(1.1);
            }
        </style>
    </head>
    <body>
        <div class="welcome-container">
            <h1>Welcome to Our Homepage!</h1>
            <p>We're thrilled to have you here. Explore, learn, and enjoy your stay!</p>
            <a href="/about">Learn More About Us</a>
            
        </div>
    </body>
    </html>
  `);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
