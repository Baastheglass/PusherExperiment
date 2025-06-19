from flask import Flask,request,jsonify
import json
from chatbot import answer

app = Flask(__name__)

@app.route('/')
def home():
    return 'Flask is working!'

@app.route('/getResponse', methods = ['POST'])
def get_response():
    if not request.is_json:
        return jsonify({"error": "Invalid Content-Type. Must be application/json"}), 400
    print(request)
    data = request.get_json()
    print(data)
    # Access a value using a key (e.g., 'query')
    query = data.get('query', 'No query provided')
    response = answer(query)
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)