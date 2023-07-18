CREATE TABLE videos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  url VARCHAR(200) UNIQUE,
  rating INT
);

INSERT INTO videos (title, url, rating)
VALUES
  ('Never Gonna Give You Up', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 23),
  ('The Coding Train', 'https://www.youtube.com/watch?v=HerCR8bw_GE', 230),
  ('Mac & Cheese | Basics with Babish', 'https://www.youtube.com/watch?v=FUeyrEN14Rk', 2111),
  ('Videos for Cats to Watch - 8 Hour Bird Bonanza', 'https://www.youtube.com/watch?v=xbs7FT7dXYc', 11),
  ('Learn Unity - Beginner"s Game Development Course', 'https://www.youtube.com/watch?v=gB1F9G0JXOo', 211),
  ('Cracking Enigma in 2021 - Computerphile', 'https://www.youtube.com/watch?v=RzWB5jL5RX0', 111),
  ('Coding Adventure: Chess AI', 'https://www.youtube.com/watch?v=U4ogK0MIzqk', 671),
  ('Coding Adventure: Ant and Slime Simulations', 'https://www.youtube.com/watch?v=X-iSQQgOd1A', 76),
  ('Why the Tour de France is so brutal', 'https://www.youtube.com/watch?v=ZacOS8NBK6U', 73)
ON CONFLICT (url) DO NOTHING;

SELECT * FROM videos;