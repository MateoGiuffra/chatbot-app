from flask import Flask, request, jsonify
from flask_cors import CORS
from ai_service import call_open_ai

import os 
from dotenv import load_dotenv

load_dotenv()
OPEN_AI_KEY = os.environ['OPEN_AI_KEY']

app = Flask(__name__)
CORS(app)

@app.route("/sendMessage", methods=["POST"])
def send_message():
    try:
        json_body = request.get_json()
        prompt = json_body.get("prompt", "")
        if not prompt:
            return jsonify({"error": "'prompt' field doesn't exists"}), 400

        respuesta = call_open_ai(OPEN_AI_KEY, prompt)
        return jsonify({"answerIA": respuesta}), 201

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": f"Something was wrong! {str(e)}"}), 500


app.run(debug=True)