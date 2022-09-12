from flask import Flask, jsonify
from requests import request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
@app.route("/home")
def index():
    param = {"page":2}
    url = "https://api.jikan.moe/v4/top/anime"
    data = request("GET", url=url, params=param).json()
    return data


@app.route("/autocomplete")
def autocomplete():
    letter = 'boku no hero'
    url = "https://api.jikan.moe/v4/anime/"
    params={'letter': letter}
    data = request("GET", url=url, params=params).json()

    return data


if __name__ == "__main__":
    app.run(debug=True)
