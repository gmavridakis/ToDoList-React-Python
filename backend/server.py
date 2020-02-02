import sqlite3
from sqlite3 import Error

def select_all_tasks(conn):
    """
    Query all rows in the tasks table
    :param conn: the Connection object
    :return:
    """
    cur = conn.cursor()
    cur.execute("SELECT * FROM tasks")
 
    rows = cur.fetchall()
 
    for row in rows:
        print(row)

def create_connection(db_file):
    """ create a database connection to the SQLite database"""
    conn = None
    try:
        conn = sqlite3.connect(db_file)
    except Error as e:
        print(e)
    return conn

def main():
    database = r"..\db\tasks-collection.db"
    # create a database connection
    conn = create_connection(database)
    select_all_tasks(conn)

if __name__ == '__main__':
    main()