import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id: 'cfc91f7e002d9fd71326';
    private client_secret = 'a49e800661cbf488ab3c17dcb0aa796952628554';

    constructor(private _http: Http){
        console.log('Github Service Se Prepare...');
        this.username='maxkram';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res=>res.json());
    }
    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res=>res.json());
    }

    updateUser(username: string){
        this.username = username;
    }    
}