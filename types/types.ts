export type PROFILE_PICTURE = {
  public_id: string;
  url: string;
};

export type DATETIME = {
  date?: string;
  time?: string;
};

export type LOCATION = {
  country?: string;
  city?: string;
  address?: string;
  postalCode?: string;
  departmentName?: string;
  departmentCode?: string;
};
