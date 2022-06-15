FROM python:3.9.6-alpine

WORKDIR /backend

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /requirements.txt
RUN apk update &&  \
    apk add --update --no-cache --virtual .tmp gcc libc-dev linux-headers  \
    && apk add --no-cache jpeg-dev zlib-dev  \
    && apk add postgresql-dev gcc python3-dev musl-dev

RUN pip install -r /requirements.txt
RUN apk del .tmp

COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' /backend/entrypoint.sh
RUN chmod +x /backend/entrypoint.sh

COPY . .

ENTRYPOINT ["sh", "/backend/entrypoint.sh"]



