// esta es la respuesta que obtenemos cuando hacemos una solicitud a topheadlines
export interface RespuestaTopHeadlines {
    status: string;
    totalResults: number;
    articles: Article[];
  }

export interface Article {
    source: Source;
    author?: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content?: string;
  }

export interface Source {
    id?: string;
    name: string;
  }
