#imports sqlite
import sqlite3

#connects it to the books-collection database
conn = sqlite3.connect('tasks-collection.db')

#creates the cursor
c = conn.cursor()

#execute the query which creates the table called books with id and name
#as the columns
c.execute('''
          CREATE TABLE tasks
          (id INTEGER PRIMARY KEY ASC,
	     task varchar(250) NOT NULL,
         user varchar(250) NOT NULL)
          ''' )

#executes the query which inserts values in the table
c.execute("INSERT INTO tasks VALUES(1, 'Go shopping', 'Gregor')")

#commits the executions
conn.commit()

#closes the connection
conn.close()