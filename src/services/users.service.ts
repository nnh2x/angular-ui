import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, of, delay } from "rxjs";
import { users } from "src/data-demo/user.data";
import { User, Users } from "src/interface/users.interface";

@Injectable({
    providedIn: 'root',
})
export class UsersService {

    constructor(private http: HttpClient) { }

    users() : Observable<Users> {
        return this.http.get<Users>('https://jsonplaceholder.typicode.com/users')
    }

    getArticles(): Observable<Users> {
        return of(users).pipe(delay(500));
    }

    getArticleBySlug(id: string): Observable<User> {
        let user = users.find(x => x.id.toString() === id.toString())
        return of(user).pipe(delay(500)) as Observable<any>;
    }
}