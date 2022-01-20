from django import forms
from martor.fields import MartorFormField


class PostForms(forms.Form):
    content = MartorFormField()
