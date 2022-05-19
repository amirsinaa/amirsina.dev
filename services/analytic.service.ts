import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

const TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID;

export namespace AnalyticService {
  export function initialize() {
    if (TRACKING_ID) {
      ReactGA.initialize(TRACKING_ID);
    }
  }

  export function pageview() {
    if (TRACKING_ID) {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }

  export function useTracker() {
    const router = useRouter();

    useEffect(() => {
      initialize();
      pageview();
    }, []);

    useEffect(() => {
      router.events.on('routeChangeComplete', pageview);

      return () => {
        router.events.off('routeChangeComplete', pageview);
      };
    }, [router]);
  }
}