import Link from 'next/link';
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react';


export const Breadcrumb = ({
  route,
  query
}: {
  route: string
  query?: string
}) => {
  const url = route.split("/")
  const lang = url[2];
  const isArticle = typeof query === 'undefined' ? false : true;
  return (
    <ChakraBreadcrumb style={{
      background: 'rgb(237, 237, 237)',
      padding: '1em',
      borderRadius: '10px',
      boxShadow: '1px 1px 4px -2px #000'
    }}>
      <BreadcrumbItem>
        <Link href='/blog'>
          Blog
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href={`/blog/${lang}`}>{lang}</Link>
      </BreadcrumbItem>
      {isArticle && <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>{query}</BreadcrumbLink>
      </BreadcrumbItem>}
    </ChakraBreadcrumb>
  );
}