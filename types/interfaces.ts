import { ALERT_CATEGORY } from "./enums";

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
  alertType: ALERT_CATEGORY;
}
