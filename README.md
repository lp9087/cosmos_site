# Сайт Космос-2
### Разворачивание проекта:
1. Создать базу
2. Прописать настройки в `localsettings.py` изменив `localsettings.py.template`
3. Создать virtualenv окружение `virtualenv analysis-env` (Windows: `python -m venv myvenv`)
4. Активировать окружение (`myvenv\Scripts\activate`)
5. Установить пакеты в окружение `pip install -r requirements.txt`
6. Провести миграции в базу `python manage.py migrate`
7. Собрать статику `python manage.py collectstatic`
8. Создать суперюзера `python manage.py createsuperuser`

