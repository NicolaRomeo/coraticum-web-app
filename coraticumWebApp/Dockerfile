FROM python:3.9
ENV PYTHONUNBUFFERED 1
WORKDIR /app/api
COPY requirements.txt ./
COPY . ./
RUN pip install -r requirements.txt
EXPOSE 8000