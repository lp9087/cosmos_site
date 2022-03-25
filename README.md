# Сайт "Космос-2"

### Разворачивание проекта:

1. Создать базу
2. Прописать настройки в `localsettings.py` изменив `localsettings.py.example`
3. Создать virtualenv окружение `virtualenv analysis-env` (Windows: `python -m venv myvenv`)
4. Активировать окружение (`myvenv\Scripts\activate`)
5. Установить пакеты в окружение `pip install -r requirements.txt`
6. Провести миграции в базу `python manage.py migrate`
7. Загрузить начальные данные в базу `python manage.py loaddata db_main_new.json`
8. Собрать статику `python manage.py collectstatic`
9. Создать суперюзера `python manage.py createsuperuser`

10. Если не установлен, то установить `Node js`
11. В папке frontend выполнить `npm install`
12. Запуск `npm run dev` / `npm run build && npm run start`

---

Additional:
`python -Xutf8 manage.py dumpdata main > db_main.json` - создать дамп файл

#### Стек: Python 3, Django, PostgreSQL, ReactJS
