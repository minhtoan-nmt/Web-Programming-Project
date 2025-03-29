'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState({ title: '', plot: '' });

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const res = await fetch('api/movies');
    const data = await res.json();
    setMovies(data.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      fetchMovies();
      setForm({ name: '', description: '' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-24">
      <h1>Movies</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Item name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="plot"
          placeholder="Item description"
          value={form.description}
          onChange={handleChange}
        />
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {movies.map((item) => (
          <li key={item._id}>
            {item.title} - {item.plot}
          </li>
        ))}
      </ul>
    </div>
  );
}