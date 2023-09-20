import { SITE_BASE } from "../consts";
import { formatTime } from "../lib/formatTime";
import type { Post } from "../types/Post";
import { Tag } from "./Tag";

export const RecipeList = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className="md:columns-2 lg:columns-3 columns-1 gap-4">
      {posts.map((post) => (
        <li className="mb-4 border-pink border-8 rounded-md bg-gray-light break-inside-avoid-column hover:drop-shadow-card-hover hover:-translate-y-2 hover:-translate-x-2 transition-all ease-in-out">
          <a href={`${SITE_BASE}/${post.slug}/`}>
            <div className="p-3">
              <h2 className="font-bold tracking-wide pb-1 mb-1 border-blue border-b">
                {post.data.title}
              </h2>
              <ul className="flex flex-wrap">
                <Tag
                  name={formatTime(post.data.cookingTime)}
                  type="cookingTime"
                />
                {post.data.categories.map((c) => (
                  <Tag name={c} type="category" />
                ))}
                {post.data.tags.map((t) => (
                  <Tag name={t} type="tag" />
                ))}
              </ul>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};
