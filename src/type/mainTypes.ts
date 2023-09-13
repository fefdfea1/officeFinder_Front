export type OfficeResponse = {
  content: OfficeData[];
  totalPages: number;
};

export type OfficeData = {
  id: number;
  imagePath: string;
  leasePrice: string;
  location: string;
  name: string;
  reviewCount: number;
  reviewRate: number;
};
