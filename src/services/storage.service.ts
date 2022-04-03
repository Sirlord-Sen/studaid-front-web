export class StorageService{
    private windowAvailabilty: Boolean
    constructor(){
        // If window is not available, 
        if (typeof window == 'undefined') {
            this.windowAvailabilty = false
        }
    }   
    
    public saveUserData(data: any) {
        const user = JSON.stringify(data.user);    
        localStorage.setItem('user', user);
    }

    public saveTokenData(data: any){
        const tokens = JSON.stringify(data.tokens);
        localStorage.setItem('tokens', tokens);
    }

    public getTokens(){
        try {
          return JSON.parse(localStorage.getItem('tokens') || "");
        } 
        catch (error) {
        }
    }

    public getUser() {
        try {
          return JSON.parse(localStorage.getItem('user') || "");
        } 
        catch (error) {
        }
    }
    
    public clearAllData() {
        localStorage.clear();
    }
}