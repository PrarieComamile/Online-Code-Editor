from flask import Flask, request, render_template
import subprocess

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    input_text = request.form['input']
    try:
        result = subprocess.run(['python3', '-c', input_text], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        if result.stderr:
            output = result.stderr
        else:
            output = result.stdout
    except Exception as e:
        output = str(e)
    return output

@app.route('/shell', methods=['POST'])
def terminal():
    pass

if __name__ == '__main__':
    app.run(debug=True)
