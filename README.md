# next-13.4.8-tsup-image-issue

This is a reproduction repo for an issue with `next@13.4.8` and a ui library built with `tsup@7.1.0` that uses `import Image from 'next/image'` and renders it.

## Steps to reproduce

To reproduce, clone the repo, install the dependencies with `pnpm i` (this is a pnpm monorepo) and run `pnpm dev`.

Navigate to `http://localhost:3000`. You will see a working page that renders an image and some other components. This is using the `ui` library under `packages/ui`. This library is transpiled by Next.js itself.

Now navigate to `http://localhost:3000/extern`. You will see that the page breaks. This is now using a library `ui-extern` (found at `packages/ui-extern`) that is built externally using `tsup` and is just consumed by the Next.js app.

## Expected behavior

Both routes should render without issues.

## Context

For context, this bug seems to come up since [`next@13.4.8-canary.9`](https://github.com/vercel/next.js/releases/tag/v13.4.8-canary.9), specifically with [this MR](https://github.com/vercel/next.js/pull/51205).

When debugging the external component, it seemed as if the imported `Image` is not a React component but an object containing two keys: `default` and `unstable_getImgProps`. When rendereing the `Image` like the following it does actually work.

```tsx
import Image from "next/image";

export const Header = ({ text }: { text: string }) => {
  return (
    <div>
      <h1>{text}</h1>
      <Image.default
        alt="Example"
        height={300}
        width={200}
        src="https://fastly.picsum.photos/id/432/200/300.jpg?hmac=S0muAtaN6T0PXbBlf5O-UL0chTPM6i9FReOIs0IJlDU"
      />
    </div>
  );
};

```