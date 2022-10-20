export interface Service {
  _id: string;
  servicesTitle: string;
  servicesDescription: string;
  servicesImage: {
    asset: {
      url: string;
    };
  };
  servicesSlug: {
    current: string;
  };
  metaTagTitle: string;
}

export interface Product {
  _id: string;
  title: string;
  description: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      url: string;
    };
  };
  metaTagTitle: string;
  metaTagKeyword: string;
}

export interface ServiceSliders {
  _id: string;
  carouselImage: {
    asset: {
      url: string;
    };
  };
  carouselTitle: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
}
export interface FeaturedProject {
  _id: string;
  title: string;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
  tags1: string;
  tags2: string;
  tags3: string;
  tags4: string;
}
