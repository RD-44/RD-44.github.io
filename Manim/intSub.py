from manim import *

class integral(Scene):
    def construct(self):
        eq1 = MathTex(r" \int_{0}^{1} x(x-1)^4 \,dx")
        eq1.set_height(3)
        sub = MathTex(r" x \rightarrow x+1")   
        sub.set_height(1)
        eq2 = MathTex(r" \int_{-1}^{0} (x+1)x^4 \,dx")
        eq2.set_height(3)
        sub.next_to(eq2, UP, buff=1)
        eq3 = MathTex(r" \int_{-1}^{0}  x^5+x^4 \,dx")
        eq3.set_height(3)
        eq4 = MathTex(r" [\frac{1}{6} x^6 + \frac{1}{5} x^5]_{-1}^{0}")
        eq4.set_height(2)
        eq5 = MathTex(r" -[\frac{1}{6} (-1)^6 + \frac{1}{5} (-1)^5]")
        eq5.set_height(2)
        eq6 = MathTex(r" \frac{1}{30} ")
        eq6.set_height(2)
        self.play(Create(eq1), run_time = 1)
        self.play(Create(sub), run_time = 1)
        self.wait(1)
        self.play(Transform(eq1,eq2), run_time = 1)
        self.wait(1)
        self.play(Transform(eq1,eq3), FadeOut(sub), run_time = 1)
        self.wait(1)
        self.play(Transform(eq1,eq4), run_time = 1)
        self.wait(1)
        self.play(Transform(eq1,eq5), run_time = 1)
        self.wait(1)
        self.play(Transform(eq1,eq6), run_time = 1)
        self.wait(1)
        print("Ok")


class integralPic(Scene):
    def construct(self):
        eq = MathTex(r" \int_{0}^{1} x(x-1)^4 \,dx")
        eq.set_height(3)
        self.add(eq)

class integralGraph(Scene):
    def construct(self):
        ax = Axes(
            x_range=[-2, 2, 1],
            y_range=[-1, 1, 0.5],
            tips=True,
            axis_config={"include_numbers": True},
        )
        graph = ax.plot(lambda  x: (x)*(x-1)**4, x_range=[-2, 2], use_smoothing=True)
        graph1 = ax.plot(lambda  x: (x+1)*(x)**4, x_range=[-2, 2], use_smoothing=True)
        eq = ax.get_y_axis_label("f(x) = x(x-1)^4", edge=UP, direction=LEFT, buff=1)
        eq1 = ax.get_y_axis_label("f(x+1) = x^4(x+1)", edge=UP, direction=LEFT, buff=1)
        area = ax.get_area(graph = graph, x_range=(0, 1))
        area.set_fill(BLUE, opacity=1)
        area1 = ax.get_area(graph = graph1, x_range=(-1, 0))
        area1.set_fill(BLUE, opacity=1)
        self.play(Create(graph), Create(ax), Create(area), FadeIn(eq, shift = LEFT), run_time=5)
        self.wait(2)
        self.play(Transform(graph, graph1), Transform(eq, eq1), Transform(area, area1),run_time = 1)
        self.wait(2)  