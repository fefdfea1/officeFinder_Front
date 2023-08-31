export type OfficeData = {
  id: number;
  name: string;
  locaion: string;
  picture: string[];
};

export type PageInfo = {
  currentPage: number;
  pageSize: number;
  totalElement: number;
  totalPages: number;
};

export type MyOfficeResponse = {
  data: OfficeData[];
  pageInfo: PageInfo;
};
