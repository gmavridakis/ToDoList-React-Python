import sqlite3
from sqlite3 import Error
import json
from flask import Flask,request
app = Flask('__name__')
from flask_cors import CORS
CORS(app)
# http://127.0.0.1:5001/viewtasks
# http://127.0.0.1:5001/addtask?task=update github project&user=gmavridakis
# http://127.0.0.1:5001/deletetasks

# create a database connection
def createConnection():
    """ create a database connection to the SQLite database"""
    conn = None
    try:
        database = r"..\db\tasks-collection.db"
        conn = sqlite3.connect(database)
    except Error as e:
        print(e)
    return conn


# DBO - START
def getTasks(conn):
    """
    Query all rows in the tasks table
    :param conn: the Connection object
    :return:
    """
    query = "SELECT * FROM tasks"
    cur = conn.cursor()
    cur.execute(query)
    rows = cur.fetchall()
    print(query)
    return json.dumps(rows)

def deleteTasks(conn):
    """
    Query all rows in the tasks table
    :param conn: the Connection object
    :return:
    """
    query = "DELETE FROM tasks"
    cur = conn.cursor()
    cur.execute(query)
    conn.commit()
    print(query)

def addTask(conn,task,user):
    """
    Query all rows in the tasks table
    :param conn: the Connection object
    :return:
    """
    
    query = "INSERT INTO tasks(task,user) VALUES('" +task +"','" +user +"');"
    cur = conn.cursor()
    cur.execute(query)
    conn.commit()
    print(query)
    
# DBO - END

# define APIs - START
@app.route('/')
@app.route('/viewtasks')
def viewtasks():
    # baseUrl/viewtasks
    conn = createConnection()
    res = getTasks(conn)    
    return res

@app.route('/deletetasks')
def deletetasks():
    # baseUrl/deletetasks
    conn = createConnection()
    deleteTasks(conn)
    return '200'

@app.route('/addtask', methods=['GET'])
def addtask():
    # baseUrl/addtask?task=...&user=...
    task = request.args.get('task')
    user = request.args.get('user')
    conn = createConnection()
    if task and user :
        addTask(conn,task,user)
        return '200'
    else :
        return '500'

# define APIs - END


def main():
    try:
        # start web server
        app.run(port='5001')
    except Error as e:
        print(e)

if __name__ == '__main__':
    main()

