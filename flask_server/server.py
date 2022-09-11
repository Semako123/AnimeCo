from flask import Flask, jsonify
from requests import request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
@app.route("/home")
def index():
    url = "https://api.jikan.moe/v4/random/anime"
    data = request('GET', url=url).json()
    return data


if __name__ == "__main__":
    app.run(debug=True)
