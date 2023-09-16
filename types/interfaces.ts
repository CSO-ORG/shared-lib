import { ACCOUNT_TYPE, ALERT_CATEGORY } from "./enums";

export interface IPROFILE_PICTURE {
  public_id: string;
  url: string;
}

export interface IDATETIME {
  date?: string;
  time?: string;
}

export interface ILOCATION {
  country?: string;
  city?: string;
  address?: string;
  postalCode?: string;
  departmentName?: string;
  departmentCode?: string;
}

export interface IPaginationFilters {
  alertType?: ALERT_CATEGORY;
  searchText?: string;
}

export interface IAlert {
  publisherId: string;
  publisherPhoneNumber: string;
  publisherEmail: string;
  isFromAppUser: boolean;
  name: string;
  description: string;
  status: string;
  alertType: string;
  icadIdentifier: string;
  petType: string;
  specie: string;
  age: number;
  ageExpressedIn: string;
  sex: string;
  breed: string;
  height: string;
  weight: string;
  hair: string;
  colors: string[];
  imageUrls: string[];
  hasTatoo: boolean;
  hasNecklace: boolean;
  necklaceMaterial: string;
  necklaceColor: string;
  hasMicrochip: boolean;
  isSterilized: boolean;
  location: ILOCATION;
  date: Date;
}

export interface IAlertSearchResult {
  hits: {
    total: number;
    hits: Array<{
      _source: IAlert;
    }>;
  };
}

export interface IUser {
  id: number;
  email: string;
  username: string;
  profilePicture: IPROFILE_PICTURE;
  password: string;
  accountType: ACCOUNT_TYPE;
  refreshToken: string;
  isEmailVerfied: boolean;
  createdAt: Date;
  updatedAt: Date;
}
