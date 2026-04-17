import { Page } from '@playwright/test';

export class LoginPage { 
      usernameInput;
      passwordInput;
      loginButton;
      
    constructor(private page : Page) {
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }
async goto(){
await this.page.goto('https://www.saucedemo.com/', {
  waitUntil: 'load',
});
}



    async login(username: string, password: string) {
        
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }


}

