from manim import *

def elem(latex, h=1, x=0, y=0):  #Easy way to create a latex object.
	obj = MathTex(r"{}".format(latex))
	obj.height = h
	obj.shift(y*UP + x*RIGHT)
	return obj

def elemr(stuff, h=1, x=0, y=0):  #Easy way to create a latex object.
	obj = Text(stuff)
	obj.height = h
	obj.shift(y*UP + x*RIGHT)
	return obj

class welcome(Scene):
    def construct(self):
    	size = 0.25
    	msgs = [elemr("Hi. This is a maths website designed to build intuition for some high school level topics (A-level or equivalent).", size),
    	elemr("I use 3Blue1Brown style videos along with written commentary to explain maths concepts in an easy to understand manner.", size),
    	elemr("Click on 'Topics' at the top to have a look at my work so far.", size)]
    	self.play(Create(msgs[0]), run_time = 0.5)
    	for i in range(1, len(msgs)):
    		self.wait(3)
    		self.play(Transform(msgs[0], msgs[i]))
    	self.wait(3)
