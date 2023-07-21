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


class User(db.Model):
    id = Column(Integer, primary_key=True)
    name = Column(String)
    surname = Column(String)
    job = Column(String)
    location = Column(String)
    birthday = Column(String)
    phone = Column(String)
    city = Column(String)
    age = Column(Integer)
    degree = Column(String)
    email = Column(String)
    text_first = Column(String)  # max length = 102
    text_second = Column(String
                         )


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
