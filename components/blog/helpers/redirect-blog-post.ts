export function blogPostRedirect(route, title, slug: string) {
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