"""
note = 'award : Nobel Peace Prize'

#award_location = note.find('Nobel')
award_location = note[1:-1]

print(award_location)

"""
import re

five_digit_zip = '98101'
nine_digit_zip = '98101-0003'
phone_number = '234-567-8901'

five_digit_expression = r'\d{5}'

print(re.search(five_digit_expression, five_digit_zip))




