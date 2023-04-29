import turtle

# Set the turtle speed
turtle.speed(10)

# Set the turtle shape to a square
turtle.shape("square")

# Set the turtle color
turtle.color("red")

# Set the turtle fill color
turtle.begin_fill()

# Draw the front face of the cube
turtle.forward(100)
turtle.right(90)
turtle.forward(100)
turtle.right(90)
turtle.forward(100)
turtle.right(90)
turtle.forward(100)
turtle.end_fill()

# Lift the turtle pen
turtle.penup()

# Move the turtle to the right
turtle.forward(100)

# Lower the turtle pen
turtle.pendown()

# Draw the right face of the cube
turtle.right(90)
turtle.begin_fill()
turtle.forward(100)
turtle.right(90)
turtle.forward(100)
turtle.right(90)
turtle.forward(100)
turtle.right(90)
turtle.forward(100)
turtle.end_fill()

# Lift the turtle pen
turtle.penup()

# Move the turtle up
turtle.right(90)
turtle.forward(100)

# Lower the turtle pen
turtle.pendown()

# Draw the top face of the cube
turtle.right(90)
turtle.begin_fill()
turtle.forward(100)
turtle.right(90)
turtle.forward(100)
turtle.right(90)
turtle.forward(100)
turtle.right(90)
turtle.forward(100)
turtle.end_fill()

# Lift the turtle pen
turtle.penup()

# Move the turtle to the left
turtle.left(180)
turtle.forward(100)

# Lower the turtle pen
turtle.pendown()

# Draw the left face of the cube
turtle.left(90)
turtle.begin_fill()
turtle.forward(100)
turtle.right(90)
turtle.forward(100)
turtle.right(90)
turtle.forward(100)
turtle.right(90)
turtle.forward(100)
turtle.end_fill()

# Lift the turtle pen
turtle.penup()

# Move the turtle down
turtle.left(90)
turtle.forward(100)

# Lower the turtle pen
turtle.pendown()

# Draw the bottom face of the cube
turtle.left(90)
turtle.begin_fill()
turtle.forward(100)
turtle.right(90)
turtle.forward(100)
turtle.right(90)
turtle.forward(100)
turtle.right(90)
turtle.forward(100)
turtle.end_fill()

# Lift the turtle pen
turtle.penup()

# Move the turtle back
turtle.left(180)
turtle.forward(100)

# Lower the turtle pen
