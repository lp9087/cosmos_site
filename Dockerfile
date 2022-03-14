FROM python:3.9.6-alpine

WORKDIR /cosmos

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /requirements.txt
RUN apk add --update --no-cache --virtual .tmp gcc libc-dev linux-headers
RUN apk add --no-cache jpeg-dev zlib-dev
RUN pip install -r /requirements.txt
RUN apk del .tmp

RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev

COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' /cosmos/entrypoint.sh
RUN chmod +x /cosmos/entrypoint.sh

COPY . .

ENTRYPOINT ["/cosmos/entrypoint.sh"]



