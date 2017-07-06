const db = require('../config/db');

const Post = {};

Post.findAll = () => {
  return db.query(`SELECT * FROM posts;`);
};

Post.create = (post) => {
  console.log('POST in MODEL', post);
  return db.one(`
    INSERT INTO posts
    (title, image_url, source_url, category, user_id)
    VALUES
    ($1, $2, $3 ,$4, $5) RETURNING *`,
    [
      post.title,
      post.image_url,
      post.source_url,
      post.category,
      post.user_id
    ]
  );
};

Post.findById = (id) => {
  return db.query(`
    SELECT * FROM posts
    WHERE user_id = $1`,
    [id]
  );
};

Post.update = (post, id) => {
  return db.none(`
    UPDATE posts
    SET
      title = $1,
      image_url = $2,
      source_url = $3,
      category = $4,
    WHERE id = $5`,
    [
      post.title,
      post.image_url,
      post.source_url,
      post.category,
      id
    ]
  );
};

Post.destroy = (id) => {
  return db.none(`
    DELETE FROM users
    WHERE id = $1`,
    [id]
  );
};

module.exports = Post;
