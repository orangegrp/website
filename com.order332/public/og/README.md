# OG Images

Drop 1200×630 PNG files here. Each file name maps to a route:

| File              | Route(s)                              |
|-------------------|---------------------------------------|
| `default.png`     | Fallback (used if named file missing) |
| `index.png`       | `/`                                   |
| `about.png`       | `/about`                              |
| `projects.png`    | `/projects`                           |
| `telos.png`       | `/projects/telos`                     |
| `ctf.png`         | `/projects/ctf`                       |
| `332-labs.png`    | `/projects/332-labs`                  |
| `twanos.png`      | `/projects/twanos`                    |
| `blog.png`        | `/blog` and all `/blog/*` posts       |
| `design.png`      | `/design`                             |

## Override per-page

Pass `ogImage="/og/custom.png"` to `<PageLayout>` to use a different image on any page:

```astro
<PageLayout title="My Page" ogImage="/og/my-custom-image.png">
```

## Recommended size

1200 × 630 px, PNG or JPG. Keep file size under 1 MB.
