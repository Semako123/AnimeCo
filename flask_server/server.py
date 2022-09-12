from flask import Flask
from flask import request as req
from requests import request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/", methods=["GET", "POST"])
@app.route("/home", methods=["GET", "POST"])
def index():
    param = {"page":1}
    url = "https://api.jikan.moe/v4/top/anime"
    data = request("GET", url=url, params=param).json()
    if req.method == "GET":
        return data
    elif req.method =='POST':
        page = req.get_json()
        param = page
        data2 = request("GET", url=url, params=param).json()
        return data2

@app.route("/autocomplete")
def autocomplete():
    letter = "boku no hero"
    url = "https://api.jikan.moe/v4/anime/"
    params = {"letter": letter}
    data = request("GET", url=url, params=params).json()

    return data


if __name__ == "__main__":
    app.run(debug=True)
