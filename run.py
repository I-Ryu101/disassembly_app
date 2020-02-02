from flask import Flask, render_template, request, jsonify

from caluculation import prime_factorization

app = Flask(__name__, template_folder='./template')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/caluculation/', methods=['POST'])
def api():
    target_json = request.json
    respons_json = prime_factorization(int(target_json['target_number']))
    return jsonify(respons_json), 200

if __name__ == "__main__":
    app.run(debug=False)