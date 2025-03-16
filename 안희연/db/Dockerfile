FROM mysql

COPY ./counter.sql /docker-entrypoint-initdb.d
ENV MYSQL_ROOT_PASSWORD=1005
ENV MYSQL_DATABASE=counter
ENV MYSQL_HOST=%