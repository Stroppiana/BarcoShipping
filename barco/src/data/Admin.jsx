import adminData from './admin.json';

export function Admin() {
  const adminKey = 'admin';

  if (!localStorage.getItem(adminKey)) {
    localStorage.setItem(adminKey, JSON.stringify(adminData[0]));
  }
}