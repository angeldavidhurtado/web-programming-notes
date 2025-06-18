from os import name, system

# Define el SO
if name == "nt":
    limpiar = "cls"
else:
    limpiar = "clear"



def main():
    limpiar_pantalla()

    ip, nombres, cantidad_host, cantidad_subredes = leer_datos()

    # cantidad_subredes, bits_necesarios = ordenar_mayor_a_menor( cantidad_subredes, bits_necesarios )
    bits_necesarios = encontrar_bits_necesarios( cantidad_host )
    subredes_ordenadas_y_simplificadas, bits_ordenados_y_simplificados = simplificar( cantidad_subredes, bits_necesarios )
    rangos_inicio, inicio_host, fin_host, rangos_fin, mascaras = tabla_redes( subredes_ordenadas_y_simplificadas, bits_ordenados_y_simplificados, cantidad_subredes, cantidad_host )
    subredes( ip, rangos_inicio, inicio_host, fin_host, rangos_fin, nombres, mascaras )



def leer_datos():
    ip = ip_a_decimal( input("Dirección IP\n> ") )
    nombres, host = [], []

    número_subredes = int( input("\nSubredes requeridas\n> ") )

    for i in range( 1, número_subredes+1 ):
        print( "\nNombre Red %i > " %i, end="" )
        nombres.append( input() )

        print( "Cantidad de host > ", end="" )
        host.append( int(input()) )

    cantidad_subredes = [1] * len(nombres)

    return (ip, nombres, host, cantidad_subredes)



def ip_a_decimal( ip_texto ):
    ip_texto += "."
    ip_texto_completa = ""
    octeto = ""
    ip = 0

    for caracter in ip_texto:
        if caracter != ".":
            octeto += caracter

        else:
            octeto = bin( int( octeto ) )
            octeto = octeto[2:len(octeto)]

            for ceros in range( 8 - len( octeto ) ):
                octeto = "0" + octeto

            ip_texto_completa += octeto
            octeto = ""

    ip = binario_a_decimal( ip_texto_completa )

    return ip



def binario_a_decimal( binario ):
    decimal = 0

    for caracter in binario:
        decimal *= 2

        if caracter == "1":
            decimal += 1

    return decimal



def encontrar_bits_necesarios( cantidad_host ):
    bits_necesarios = []

    for i in range( len(cantidad_host) ):
        exponente = 0
        host = cantidad_host[i]+2

        while 2**exponente < host:
            exponente += 1

        bits_necesarios.append( exponente )

    return bits_necesarios



def simplificar( cantidad_subredes, bits_necesarios ):
    subredes_simplificadas = [ cantidad_subredes[0] ]
    bits_simplificados = [ bits_necesarios[0] ]

    longitud = len( bits_necesarios )
    i = 0

    for ii in range( 1, longitud ):
        if bits_simplificados[ i ] == bits_necesarios[ ii ]:
            subredes_simplificadas[ i ] += cantidad_subredes[ ii ]

        else:
            subredes_simplificadas.append( cantidad_subredes[ ii ] )
            bits_simplificados.append( bits_necesarios[ ii ] )
            i += 1

    return (subredes_simplificadas, bits_simplificados)



def tabla_redes( subredes, bits, cantidad_subredes, cantidad_host):
    longitud = len( subredes )
    rangos_inicio, rangos_fin = [], []
    inicio_host, fin_host = [], []
    mascaras = []

    # --- --- --- Inicio Y Fin Del Rango --- --- ---

    rango = 0
    u = 0

    for i_l in range( longitud ):
        bits_necesarios = bits[i_l]

        for i in range( subredes[i_l] ):
            bits_host = 2**bits_necesarios

            rangos_inicio.append( rango * bits_host )
            rangos_fin.append( rangos_inicio[-1] + bits_host - 1 )

            mascaras.append( 32 - bits[u] )

            rango += 1

        if i_l < longitud-1:
            agregar_ceros = bits[i_l] - bits[i_l + 1]
            rango *= 2**agregar_ceros
            u += 1

    # --- --- --- Primer Y Última Red Pedida --- --- ---

    u = 0

    for i_cantidad in range( len(cantidad_subredes) ):
        host = cantidad_host[ i_cantidad ]

        for i in range( cantidad_subredes[i_cantidad] ):
            inicio_host.append( rangos_inicio[u] + 1 )
            fin_host.append( rangos_inicio[u] + host )
            u += 1

    return ( rangos_inicio, inicio_host, fin_host, rangos_fin, mascaras )



def subredes( ip, rangos_inicio, inicio_host, fin_host, rangos_fin, nombres, mascaras ):
    print( "\nNombre\tInicio\tInicio Host\tFin Host\tFin\tMáscara" )

    for i in range( len(rangos_inicio) ):
        dir_inicio_rango = decimal_a_ip( ip + rangos_inicio[i] )
        dir_inicio_host = decimal_a_ip( ip + inicio_host[i] )
        dir_fin_host = decimal_a_ip( ip + fin_host[i] )
        dir_fin_rango = decimal_a_ip( ip + rangos_fin[i] )

        print( "%s\t%s\t%s\t%s\t%s\t%s" %(nombres[i], dir_inicio_rango, dir_inicio_host, dir_fin_host, dir_fin_rango, mascaras[i]) )



def decimal_a_ip( ip_decimal ):
    ip_binario = bin( ip_decimal )
    ip_binario = ip_binario[2:len(ip_binario)]

    for ceros in range( 32 - len( ip_binario ) ):
        ip_binario = "0" + ip_binario

    octeto = ""
    ip = ""

    for digito in ip_binario:
        if len(octeto) < 8:
            octeto += digito

        else:
            ip += str(binario_a_decimal( octeto )) + "."
            octeto = digito

    ip += str(binario_a_decimal( octeto ))

    return ip



def limpiar_pantalla():
    system(limpiar)



main()
