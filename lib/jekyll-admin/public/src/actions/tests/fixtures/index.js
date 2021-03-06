export const doc = {
  "id": "/movies/the-revenant",
  "ext": ".md",
  "slug": "the-revenant",
  "collection": "movies",
  "raw_content": "# Test Document",
  "content": "Test Document",
  "layout": "default",
  "title": "The Revenant",
  "path": "_movies/the-revenant.md"
};

export const documents = [
  {
    "id": "2016-05-20-testing-posts",
    "ext": ".md",
    "collection": "posts",
    "content": "You’ll find this post in your `_posts` directory.",
    "layout": "post",
    "title": "Testing Posts",
    "date": "2016-05-20 01:10:46 +0300",
    "categories": "test",
    "path": "_posts/2016-05-20-testing-posts.md"
  },
  {
    "id": "2016-05-29-google-summer-of-code",
    "ext": ".md",
    "collection": "posts",
    "content": "You’ll find this post in your `_posts` directory.",
    "layout": "post",
    "title": "Google Summer of Code!",
    "date": "2016-05-29 01:10:46 +0300",
    "categories": "gsoc",
    "students": [
      {
        "name": "Mert Kahyaoğlu",
        "email": "mertkahyaoglu93@gmail.com",
        "username": "mertkahyaoglu"
      },
      {
        "name": "Ankur Singh",
        "email": "ankur13019@iiitd.ac.in",
        "username": "rush-skills"
      }
    ],
    "mentors": ["Ben Balter", "Jurgen Leschner", "Parker Moore"],
    "path": "_posts/2016-05-29-google-summer-of-code.md"
  },
  {
    "id": "2016-01-01-some-post",
    "ext": ".md",
    "collection": "posts",
    "content": "You’ll find this post in your `_posts` directory.",
    "layout": "post",
    "title": "Welcome to Jekyll!",
    "date": "2016-01-01 01:10:46 +0300",
    "categories": "jekyll update",
    "path": "_posts/2016-01-01-some-post.md"
  }
];

export const collections = [
  {
    "path": "/posts",
    "title": "Posts"
  },
  {
    "path": "/movies",
    "title": "Movies"
  }
];

export const page = {
  "name": "contact.md",
  "raw_content": "# This is the base Jekyll theme.",
  "dir": "/",
  "url":"/page.html",
  "path": "contact.md"
};

export const state = {
  body: 'Google summer of code is awesome',
  path: 'gsoc.md',
  title: 'Google Summer of Code',
  published: true,
  layout: "post",
  categories: "gsoc",
  students: [
    "GSoC Students",
    {
      name: {
        first: "Mert",
        last: "Kahyaoğlu"
      },
      email: [
        "mertkahyaoglu93@gmail.com",
        "test@gmail.com"
      ],
      username: "mertkahyaoglu"
    },
    {
      name: {
        first: "Ankur",
        last: "Singh"
      },
      email: "ankur13019@iiitd.ac.in",
      username: "rush-skills"
    }
  ],
  mentors: ["Ben Balter", "Jurgen Leschner", "Parker Moore"],
  new_field_count: 0
};
