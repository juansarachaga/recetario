from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def inicio():
    title="Bienvenido"
    return render_template("home.html",title=title)

@app.route("/contacto")
def contacto():
    title="Contacto"
    return render_template("contacto.html",title=title)