psql postgres <<EOF
\c testdb
drop table if exists users;
create table users (
    id      SERIAL       PRIMARY KEY,
    name    varchar(10)  NOT NULL 
);
insert into users(name)
values('Jack')
returning ID;
EOF
