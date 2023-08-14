export function blogPostRedirect(route: string, title: string, slug: string): unknown {
  if (title !== route && !!title) {
    return {
      redirect: {
        destination: `/blog/${slug}/${encodeURIComponent(title)}`
      },
    }
  } else if (title === undefined) {
    return {
      notFound: true
    }
  }
}