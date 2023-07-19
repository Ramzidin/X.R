from flask import *
from flask_sqlalchemy import *
from flask_migrate import *
from sqlalchemy import *
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = 'postgresql://postgres:123@localhost/X.R'
app.config["SQLALCHEMY_TRACK_MODIFICATION"] = True
app.config['UPLOAD_FOLDER'] = 'static/img'
app.config["SECRET_KEY"] = "X.R-web-programing"
ALLOW_EXTENSION = {'png', 'jpg', 'jpeg', 'webp', 'avif', 'mp3', 'jfif'}
db = SQLAlchemy(app)

migrate = Migrate(app, db)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/test')
def test():
    return render_template('test.html')


@app.route('/test1')
def test1():
    return render_template('test1.html')


@app.route('/test2')
def test2():
    return render_template('test2.html')


if __name__ == '__main__':
    app.run()
