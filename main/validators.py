import re
from django.core.exceptions import ValidationError


def phone_number_validator(value):
    if not bool(
            re.match(r'^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$', value)):
        raise ValidationError('Неверный формат номера телефона')
