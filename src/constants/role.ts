export enum USER_ROLE {
  CLIENT = "client",
  ADMIN = "admin",
  SUPER_ADMIN = "super-admin",
}
export enum ADMIN_SERVICE {
  CONTENT = "content-management",
  USER = "user-management",
}
export const serviceOptions = [
  {
    label: "user-management",
    value: "user-management",
  },
  {
    label: "content-management",
    value: "content-management",
  },
];
export const serviceTypeOptions = [
  {
    label: "Ironing and Pressing",
    value: "Ironing and Pressing",
  },
  {
    label: "Dry Cleaning",
    value: "Dry Cleaning",
  },
  {
    label: "Wash and Fold",
    value: "Wash and Fold",
  },
];
export const statusOptions = [
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Upcoming",
    value: "upcoming",
  },
  {
    label: "Inactive",
    value: "inactive",
  },
];
