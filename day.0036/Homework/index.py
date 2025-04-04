# aq codewarsi gvqonda
# textarea:focus, input:focus{

# outline: 0;

# }

# .form-line-error input:not(#coupon-input), .form-line-error textarea {

# border: 1px solid #FF3030;

# -moz-box-shadow: 0 0 0px #FF3030;

# -webkit-box-shadow: 0 0 0px #FF3030;

# box-shadow: 0 0 0px #FF3030;

# background-color: #FFFFFF;

# }

registered_pass = "1234567891011121314151617181920"
user_input = ""

while user_input != registered_pass:
    user_input = input("Enter password: ")

def revers_words(string1):
    splited_str = string1.split()