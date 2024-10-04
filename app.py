from flask import Flask, render_template, jsonify
import uuid

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/create_meeting')
def create_meeting():
    meeting_id = str(uuid.uuid4())
    return jsonify({'meetingId': meeting_id})

if __name__ == "__main__":
    app.run(debug=True)
