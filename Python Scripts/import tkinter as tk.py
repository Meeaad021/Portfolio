import tkinter as tk
from tkinter import messagebox

# Function to calculate based on the missing field
def calculate():
    try:
        # Get values from inputs
        principal = entry_principal.get()
        rate = entry_rate.get()
        time = entry_time.get()
        compounds_per_year = entry_compounds.get()
        future_value = entry_future_value.get()

        # If future value (compound interest) is missing, calculate it
        if not future_value:
            principal = float(principal)
            rate = float(rate)
            time = float(time)
            compounds_per_year = int(compounds_per_year)
            future_value = principal * (1 + rate / (100 * compounds_per_year)) ** (compounds_per_year * time)
            entry_future_value.delete(0, tk.END)
            entry_future_value.insert(0, f"{future_value:.2f}")
        
        # If principal is missing, calculate it
        elif not principal:
            future_value = float(future_value)
            rate = float(rate)
            time = float(time)
            compounds_per_year = int(compounds_per_year)
            principal = future_value / (1 + rate / (100 * compounds_per_year)) ** (compounds_per_year * time)
            entry_principal.delete(0, tk.END)
            entry_principal.insert(0, f"{principal:.2f}")
        
        # If rate is missing, calculate it (this requires solving iteratively)
        elif not rate:
            principal = float(principal)
            future_value = float(future_value)
            time = float(time)
            compounds_per_year = int(compounds_per_year)

            # Simple iteration to approximate the interest rate (Newton's method can be more precise)
            rate = 0
            step = 0.0001  # Precision of approximation
            while rate <= 100:
                estimated_value = principal * (1 + rate / (100 * compounds_per_year)) ** (compounds_per_year * time)
                if abs(estimated_value - future_value) < 0.01:
                    break
                rate += step

            entry_rate.delete(0, tk.END)
            entry_rate.insert(0, f"{rate:.2f}")

        # If time is missing, calculate it
        elif not time:
            principal = float(principal)
            future_value = float(future_value)
            rate = float(rate)
            compounds_per_year = int(compounds_per_year)
            time = (log(future_value / principal) / log(1 + rate / (100 * compounds_per_year))) / compounds_per_year
            entry_time.delete(0, tk.END)
            entry_time.insert(0, f"{time:.2f}")

    except ValueError:
        messagebox.showerror("Input Error", "Please ensure all provided values are numeric and valid.")

# Create the main window
root = tk.Tk()
root.title("Flexible Financial Calculator")

# Labels and Inputs for each field
fields = [("Principal ($):", "entry_principal"),
          ("Annual Interest Rate (%):", "entry_rate"),
          ("Time (Years):", "entry_time"),
          ("Compounds per Year:", "entry_compounds"),
          ("Future Value ($):", "entry_future_value")]

for i, (label_text, entry_var) in enumerate(fields):
    label = tk.Label(root, text=label_text)
    label.grid(row=i, column=0, padx=10, pady=5)
    globals()[entry_var] = tk.Entry(root)
    globals()[entry_var].grid(row=i, column=1, padx=10, pady=5)

# Calculate button
button_calculate = tk.Button(root, text="Calculate", command=calculate)
button_calculate.grid(row=len(fields), columnspan=2, pady=10)

# Running the main event loop
root.mainloop()
