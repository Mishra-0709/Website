body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.login-page, .data-page {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
}

.login-page {
    background-image: url('https://i.pinimg.com/originals/44/44/10/4444106f8e5fd6cd2a654b5a31fb0941.jpg');
}

.data-page {
    background-image: url('https://go.trader.ca/wp-content/uploads/2017/08/web-from-background-car.jpg');
}

.container {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.container h1 {
    text-align: center;
}

.container form {
    display: flex;
    flex-direction: column;
}

.container input {
    margin: 10px 0;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.container button {
    padding: 10px;
    font-size: 16px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.container button:hover {
    background-color: #218838;
}

#data-container {
    color: white;
    text-align: center;
}

.sos-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: red;
    color: white;
    font-size: 18px;
    padding: 15px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
}
