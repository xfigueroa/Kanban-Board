import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    try {
      const token = this.getToken();
      return jwtDecode<JwtPayload>(token);
    } catch (err) {
      console.error('Failed to get profile', err);
      return null;
    }

  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    try {
      const token = this.getToken();
      return token ? true : false;
    }
    catch (err) {
      console.error('Failed to check if the user is logged in', err);
      return false;
    } 

  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    try {
      const decodedToken = jwtDecode<JwtPayload>(token);
      return decodedToken.exp ? Date.now() >= decodedToken.exp * 1000 : false;
    } catch (err) {
      console.error('Failed to check if the token is expired', err);
      return true;
    }
  }

  getToken(): string {
    // TODO: return the token
    return localStorage.getItem('token') || '';
  }

  login(idToken: string): { token: string } {
    // TODO: set the token to localStorage
    try {
      localStorage.setItem('token', idToken);
    } catch (err) {
      console.error('Failed to set token to local storage', err);
    }    
    // TODO: redirect to the home page
     window.location.assign('/');
    return { token: idToken };
  }

  logout() {
    // TODO: remove the token from localStorage
    try {
      localStorage.removeItem('token');
    } catch (err) {
      console.error('Failed to remove token from local storage', err  );
    }
    // TODO: redirect to the login page
    window.location.assign('/');
  }
}

export default new AuthService();
