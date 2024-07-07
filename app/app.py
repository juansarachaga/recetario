from flask import Flask, render_template

app = Flask(__name__)
unMenu = [("/", "Inicio"), ("/recetas", "Recetas"), ("/nosotros", "Nosotros"), ("/contacto", "Contacto")]

@app.route("/")
def cargarIndex():
    return render_template("index.html", unMenu=unMenu)

@app.route("/recetas")
def cargarRecetas():
    return render_template("recetas.html", unMenu=unMenu)

@app.route("/nosotros")
def cargarNosotros():
    return render_template("nosotros.html", unMenu=unMenu)

@app.route("/contacto")
def cargarContacto():
    return render_template("contacto.html", unMenu=unMenu)

