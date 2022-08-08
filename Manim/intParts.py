from manim import *

def elem(latex, h=1, x=0, y=0):  #Easy way to create a latex object.
	obj = MathTex(r"{}".format(latex))
	obj.height = h
	obj.shift(y*UP + x*RIGHT)
	return obj

class integralIntro(Scene):
    def construct(self):
        items = [elem("f(x) = u(x)v(x)", 1.5, 0, 2), 
        		elem("f^\prime(x) = u^\prime(x)v(x) + u(x)v^\prime(x)"), 
        		elem("\int f^\prime(x) \,dx = \int [u^\prime(x)v(x) + u(x)v^\prime(x)] \,dx", 1.5),
        		elem("\int f^\prime(x) \,dx = \int u^\prime(x)v(x) \,dx + \int u(x)v^\prime(x) \,dx", 1.5),
        		elem("f(x) = \int u^\prime(x)v(x) \,dx + \int u(x)v^\prime(x) \,dx", 1.5),
        		elem("u(x)v(x) = \int u^\prime(x)v(x) \,dx + \int u(x)v^\prime(x) \,dx", 1.5),
        		elem("\int u(x)v^\prime(x) \,dx = u(x)v(x) - \int u^\prime(x)v(x) \,dx", 1.5)]
        self.play(Create(items[0]))
        self.play(Create(items[1]))
        for i in range(2, len(items)):
        	self.wait(2)
        	self.play(Transform(items[1], items[i]), run_time = 1)
        self.wait(2)


        
