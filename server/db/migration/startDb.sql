CREATE TABLE IF NOT EXISTS keywords 
(
    id SERIAL PRIMARY KEY,
    name VARCHAR UNIQUE NOT NULL UNIQUE,
    type VARCHAR NOT NULL,
    last_searched TIMESTAMP default current_timestamp,
    count INT
);