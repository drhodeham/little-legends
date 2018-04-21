FROM python:alpine3.7

COPY requirements.txt /
RUN pip3 install -r requirements.txt

COPY . /app
WORKDIR /app

CMD [ "python3", "app.py" ]