import { NextResponse } from 'next/server';
import clientPromise from "@/lib/mongodb";
import MovieSchema from "@/models/Movie";


export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const sizeParam = searchParams.get("n");
    const size = sizeParam ? parseInt(sizeParam) : 10;

    const Movie = MovieSchema;

    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const rawMoviesData = await db
        .collection("movies")
        .find({})
        .sort({ metacritic: -1 })
        .limit(size)
        .toArray();

    const parsedMovies = rawMoviesData.map(rawMovie => {
      const movie = new Movie({
        title: rawMovie.title,
        plot: rawMovie.plot
      });
      return movie.toObject();
    });

    return NextResponse.json({ success: true, data: parsedMovies }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}