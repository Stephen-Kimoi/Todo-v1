from flask import Flask, render_template, redirect, url_for, request 
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate 

app = Flask(__name__) 
app.config['SQLALCHEMY_DATABASE_URL'] = 'postgresql://postgres:abc@localhost:5432/todo-app'
db = SQLAlchemy(app)

migrate = Migrate(app, db)
