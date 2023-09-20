export type Post = {
  slug: string;
  data: {
    title: string;
    cookingTime: number;
    categories: string[];
    tags: string[];
  };
};
