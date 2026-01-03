This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
## Toolkit
1. Vercel (hosting)
2. Tailwind (styling)
3. Cloudinary (image hosting)


## Getting Started

1. How to run the development server:

```bash
yarn dev
```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


##  Adding a new image

1. Upload image to Cloudindary and get `publicID`.
2. Go to `src/lib/item.js` to add to `workItemsData` or `sketchItemsData` array.

## Adding new note

1. Create markdown file with frontmatter in `src/data/notes` folder.
