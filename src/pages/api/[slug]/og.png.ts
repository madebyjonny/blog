import type { APIRoute } from "astro";
import { ImageResponse } from "@vercel/og";
import { Banner } from "./banner";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ props }) => {
  const { title, summary } = props.post.data;
  return new ImageResponse(Banner(title, summary), {
    width: 1200,
    height: 600,
  });
};

export async function getStaticPaths() {
  const blogPosts = await getCollection("posts");
  return blogPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}
