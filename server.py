from flask import Flask, render_template

server = Flask(__name__)

@server.route('/')
def indexSite():
    return render_template("index.html")

@server.route('/inna')
def otherSite():
    return "To jest inna strona WWW"

@server.route('/html/<siteName>')
def fetchSite(siteName):
    retStr = ""
    for s in open(f'./static/html/{siteName}.html',encoding="utf8").readlines():
        retStr += s
    return retStr
    #return f"Chcesz załadować plik {siteName}"

server.run()