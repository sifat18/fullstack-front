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
