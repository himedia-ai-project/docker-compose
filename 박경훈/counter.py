from flask import Flask, render_template, redirect, url_for
import sqlite3

app = Flask(__name__)

DB_PATH = 'counter.db'

def init_db():
    with sqlite3.connect(DB_PATH) as conn:
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS counter (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                clicks INTEGER NOT NULL DEFAULT 0
            )
        ''')
        cursor.execute('SELECT COUNT(*) FROM counter')
        if cursor.fetchone()[0] == 0:
            cursor.execute('INSERT INTO counter (clicks) VALUES (0)')
        conn.commit()

def get_click_count():
    with sqlite3.connect(DB_PATH) as conn:
        cursor = conn.cursor()
        cursor.execute('SELECT clicks FROM counter WHERE id = 1')
        row = cursor.fetchone()
        if row:
            return row[0]
        else:
            cursor.execute('INSERT INTO counter (clicks) VALUES (0)')
            conn.commit()
            return 0

def increment_click_count():
    with sqlite3.connect(DB_PATH) as conn:
        cursor = conn.cursor()
        cursor.execute('UPDATE counter SET clicks = clicks + 1 WHERE id = 1')
        conn.commit()

@app.route('/')
def index():
    count = get_click_count()
    return render_template('index.html', count=count)

@app.route('/increment')
def increment():
    increment_click_count()
    return redirect(url_for('index'))

if __name__ == '__main__':
    init_db()
    app.run(host='0.0.0.0', port=8080, debug=True)
