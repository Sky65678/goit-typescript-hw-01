export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UpdateRole = Record<UserRole, string>;
// Замініть наступний код на версію за допомогою Record
const RoleDescription: UpdateRole = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
