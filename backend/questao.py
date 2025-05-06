# não terminado, // alterar o banco para alterar e incluir a alternativa correta

import sqlite3

def inserir_questao(id_questao, enunciado, alternativaA, alternativaB, alternativaC, alternativaD, dica, valor, nivel_dificuldade):
    conn = sqlite3.connect('quizDB.db')
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO questoes (
            id_questao, enunciado, alternativaA, alternativaB, alternativaC,
            alternativaD, dica, valor, nivel_dificuldade
        ) VALUES (? ,?, ?, ?, ?, ?, ?, ?, ?)
    """, (id_questao, enunciado, alternativaA, alternativaB, alternativaC, alternativaD, dica, valor, nivel_dificuldade))
    conn.commit()
    conn.close()

def buscar_todas_questoes():
    conn = sqlite3.connect('quizDB.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM questoes")
    questoes = cursor.fetchall()
    conn.close()
    return questoes

def buscar_questao_por_id(id_questao):
    conn = sqlite3.connect('quizDB.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM questoes WHERE ID_questao = ?", (id_questao,))
    questao = cursor.fetchone()
    conn.close()
    return questao
