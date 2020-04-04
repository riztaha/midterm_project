DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  prep_time TIME NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  photo TEXT NOT NULL
);
