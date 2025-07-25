'use server';



export function getTokenFromLocalStorage() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
}
