#coding:utf-8

from sys import version_info
from time import sleep
from os import system
from os import name
from random import randint

def clear():
    if name == "nt":
        system("cls")

    else:
        system("clear")

def read(texto = ""):
    if version_info[0] == 2:
        cambio = raw_input(texto)

    else:
        cambio = input(texto)

    return cambio

clear()

print("Filas")
filas = int(read(">"))
clear()

print("Columnas")
columnas, mostrar_primera_vez = int(read(">")), 1
clear()

print("Desea determinar el tiempo para el cambio de estado s/n ")

cambio = read(">")

clear()

if cambio == 's':
    print("Tiempo en segundos")
    tiempo = float(read())

matriz, matriz_auxiliar = [], []

# Se crea una matriz con las dimenciones especificada

for i in range(filas):
    matriz.append([0]*columnas)

# Se crea la matriz_auxiliar para las operaciones

filas = filas + 2
columnas = columnas + 2

for i in range(filas):
    matriz_auxiliar.append([0]*columnas)

# Se ingresan los datos a la matriz

filas = filas - 2
columnas = columnas - 2

clear()

print("Que quiere hacer\n1) Llenar el juego aleatoreamente\n2) Cargar un estado\n3) Llenar el juego manualmente")
respuesta = read(">")

if respuesta == "1":
    for i in range(filas):
        for u in range(columnas):
            matriz[i][u] = randint(0, 1)

elif respuesta == "2":
    clear()

    print("1) Esquinas\n2) Centro")
    respuesta = read()

    if respuesta == "1":
        matriz[0][2] = 1
        matriz[1][2] = 1
        matriz[2][2] = 1
        matriz[2][1] = 1
        matriz[1][0] = 1

        matriz[int(filas-1)][int(columnas-3)] = 1
        matriz[int(filas-2)][int(columnas-3)] = 1
        matriz[int(filas-3)][int(columnas-3)] = 1
        matriz[int(filas-3)][int(columnas-2)] = 1
        matriz[int(filas-2)][int(columnas-1)] = 1

        matriz[0][(columnas-3)] = 1
        matriz[1][(columnas-3)] = 1
        matriz[2][int(columnas-3)] = 1
        matriz[2][int(columnas-2)] = 1
        matriz[1][int(columnas-1)] = 1

        matriz[int(filas-1)][2] = 1
        matriz[int(filas-2)][2] = 1
        matriz[int(filas-3)][2] = 1
        matriz[int(filas-3)][1] = 1
        matriz[int(filas-2)][0] = 1

    elif respuesta == "2":
        matriz[int((filas-1)/2-1)][int((columnas-1)/2-1)] = 1
        matriz[int((filas-1)/2-1)][int((columnas-1)/2)] = 1
        matriz[int((filas-1)/2)][int((columnas-1)/2)] = 1
        matriz[int((filas-1)/2+1)][int((columnas-1)/2)] = 1
        matriz[int((filas-1)/2)][int((columnas-1)/2+1)] = 1

else:
    for i in range(filas):
        for u in range(columnas):
            clear()

            print("Celda %s, %s: " %(i+1, u+1))
            matriz[i][u] = int(read())

clear()

print("Modo de visualisacion:\n\n1) . # .\n   # . #\n   . # .\n\n2)  #\n   # #\n    #\n\n3) Personalisado")
estilo_visual = read()

if estilo_visual == "1":
    cero, uno = ". ", "# "

elif estilo_visual == "2":
    cero, uno = " ", "#"

else:
    clear()
    print("Celda muerta")
    cero = read()

    clear()
    print("Celda viva")
    uno = read()

# Inicia el ciclo para que siempre se pasen los datos las matrises y se repita el proseso

while True:
    clear()

    # Se muestra la matriz pero con graficos

    for i in range(filas):
        grafica = ''

        for u in range(columnas):
            if matriz[i][u] == 1:
                signo = uno

            else:
                signo = cero

            grafica = grafica + signo

        print(grafica)

    # Pasa la informacion la matriz a matriz_auxiliar

    for i in range(filas):
        for u in range(columnas):
            matriz_auxiliar[i+1][u+1] = matriz[i][u]

    # Se hacen las operaciones y se almacenan en la matriz

    filas = filas + 1
    columnas = columnas + 1

    for i in range(1, filas):
        for u in range(1, columnas):
            suma = matriz_auxiliar[i-1][u-1] + matriz_auxiliar[i-1][u] + matriz_auxiliar[i-1][u+1] + matriz_auxiliar[i][u-1] + matriz_auxiliar[i][u+1] + matriz_auxiliar[i+1][u-1] + matriz_auxiliar[i+1][u] + matriz_auxiliar[i+1][u+1]

            if suma == 3:
                matriz[i-1][u-1] = 1

            elif suma == 2:
                matriz[i-1][u-1] = matriz[i-1][u-1]

            else:
                matriz[i-1][u-1] = 0

    filas = filas - 1
    columnas = columnas - 1

    if cambio == "n" and mostrar_primera_vez == 1:
        print("\nOprima enter para continuar ")
        continuar = read()
        mostrar_primera_vez = 0

    elif mostrar_primera_vez == 0:
        continuar = read()

    else:
        sleep(tiempo)

"""
Quiero disculparme
Soy consciente de la situación.
  De repente apareció un tipo raro diciendo que no creía que
creia que la perfección no existía hasta que te vio, que incluso
te siguió para hablarte, así que, creo que tienes motivos
suficientes para esquivarme, yo lo aria.
  Sin embargo, realmente quiero que, saliéramos algún día, en
condiciones apropiadas, así que te invito a salir, está invitación
no tiene fecha de caducidad, por lo que siempre estará disponible.
  Por cierto, te traje esto, considéralo un soborno por tu perdón.


pero, no tengo ninguna intención de pasar por encima de tu vida

estaba desesperado, fuera de mis casillas
me habia pasado tres años buscando una verdad que podia persivir
pero que hera incapaz de expresar

>>> mantengamos el contacto (o algo asi) mantengamos algún contacto

a donde vamos ?
todavía no lo sé, lo decidiremos por el camino

> la cosas pasan por una razón

ahora que estamos los dos solos podemos hablar con calma
tenemos todo el tiempo del mundo

como persona con los demás soy …, pero con tigo …
películas coco

es que tu eres la causa de mi insomnio
"""
