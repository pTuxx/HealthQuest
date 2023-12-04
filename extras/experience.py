import tkinter
from tkinter import ttk

root = tkinter.Tk()
big_frame = ttk.Frame(root)
big_frame.pack(fill='both', expand=True)
label = ttk.Label(big_frame, text="How was your experience with us?")
label.pack()

#Good button
button1 = ttk.Button(big_frame, text="Good")
button1.pack()
def open_new_window0():
    new_window0 = tkinter.Toplevel(root)
    new_window0.geometry("300x200")
    new_window0.title('Wonderful! Have a great day!')
    ttk.Label(new_window0, text="Thank you for your feedback!")


button1.configure(command=open_new_window0)

#Moderate Code
button2 = ttk.Button(big_frame, text="Moderate")
button2.pack()


def open_new_window1():
    tkinter.Toplevel(root)
    window = tkinter.Toplevel(root)
    window.title("New Window")
    window.geometry("200x200")
    label = ttk.Label(window, text="")
    label.pack()
    button = ttk.Button(window, text="Close", command=window.destroy)
    button.pack()
    button2.configure(command=open_new_window1)


#Bad Code

button3 = ttk.Button(big_frame, text="Bad")
button3.pack()
def open_new_window():
    new_window = tkinter.Toplevel(root)
    new_window.geometry('300x200')
    new_window.title('Why was your experience bad?')
    ttk.Label(new_window, text="Please tell us why!")

button3.configure(command=open_new_window)

root.title("Button Test")
root.geometry('200x100')
root.minsize(150, 50)
root.mainloop()
