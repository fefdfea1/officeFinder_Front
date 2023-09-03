//get
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

// post
export type NewOfficePost = {
  officeName: string | undefined;
  maxCapacity: number | undefined;
  leaseFee: number | undefined;
  remainRoom: number | undefined;
  address: Address | undefined;
  officeOption: officeOption | undefined;
  officePicture: NewOfficePicture | undefined;
};

export type Address = {
  legion: string;
  city: string;
  town: string;
  street: string;
  zipcode: number;
  detail: string;
};

export type officeOption = {
  haveAirCondition: boolean;
  haveCafe: boolean;
  havePrinter: boolean;
  packageSendServiceAvailable: boolean;
  haveDoorLock: boolean;
  faxServiceAvailable: boolean;
  havePublicKitchen: boolean;
  havePublicLounge: boolean;
  havePrivateLocker: boolean;
  haveTvProjector: boolean;
  haveWhiteBoard: boolean;
  haveWifi: boolean;
  haveShowerBooth: boolean;
  haveStorage: boolean;
  haveHeater: boolean;
};

export type NewOfficePicture = {
  picture1?: string;
  picture2?: string;
  picture3?: string;
  picture4?: string;
  picture5?: string;
};
