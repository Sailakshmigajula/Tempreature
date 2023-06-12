* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url("./tempp.jpg");
    background-size: cover;
}

.container {
    max-width: 500px;
    background: transparent;
    /* background-color:rgb(153, 213, 235); */

    border-radius: 10px;
    box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.4);
    font-family: sans-serif;
    padding: 25px;
}

.title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap-reverse;
    gap: 10px;
}

.temp-icon {
    font-size: 50px;
    color: aliceblue;
}

h1 {
    color: aliceblue;
    letter-spacing: 1px;
}

#celcius,
#fahrenheit {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 27px;
}

input {
    flex: 5;
    height: 60px;
    font-size: 22px;
    text-align: center;
    border-radius: 10px;
    padding: 0 10px;
    border: none;
    outline: none;
    font-weight: 700;
}

.icon {
    flex: 1;
    height: 60px;
    line-height: 60px;
    padding: 0 5px;
    text-align: center;
    font-size: 30px;
    background: rgb(189, 216, 226);
    border-radius: 10px;
}

.button {
    margin-top: 30px;
    text-align: center;
}

.button button {
    border: none;
    outline: none;
    padding: 10px;
    font-size: 22px;
    border-radius: 4px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.4s;
}

.button button:hover {
    background: #000;
    color: antiquewhite;
}
