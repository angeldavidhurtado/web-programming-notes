from os import name, system
from PIL import Image
from math import sin, cos, pi

def main():
    clear()

    canvas = Image.new( 'RGB', (300, 300) )

    for x in range( 300 ):
        for y in range( 300 ):
            r = int( sin( pi * x ) )
            g = int( cos( pi * x * y ) )
            b = int( sin( pi * y ) )

            # print( '%s %s %s' %(r, g, b) )
            canvas.putpixel( (x, y), (r, g, b) )

    canvas.save( 'Final.png' )
    print( 'ok' )

def clear():
    if name == 'nt':
        system( 'cls' )

    else:
        system( 'clear' )

main()
