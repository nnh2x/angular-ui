import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { switchMap } from "rxjs";
import { User, Users } from "src/interface/users.interface";
import { UsersService } from "src/services/users.service";
export interface UsersState {
    users: Users;
    user: User
    id: number;
}

const initialState: UsersState = {
    users: [],
    user: {
        id: 0,
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            }
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    },
    id: -1
}

@Injectable()
export class UsersStore extends ComponentStore<UsersState> {
    constructor(readonly usersService: UsersService) {
        super({ ...initialState })
        this.loadCustomers();
    }

    readonly users$ = this.select((s) => s.users);
    readonly user$ = this.select((s) => s.user);

    readonly loadCustomers = this.effect((params$) =>
        params$.pipe(
            switchMap(() =>
                this.usersService.users().pipe(
                    tapResponse(
                        (users) => {
                            this.patchState({ users: users });
                        },
                        () => { }
                    )
                )
            )
        )
    );

    readonly getUser = this.effect<string>((params$) =>
        params$.pipe(
            switchMap(async (id) => {
                return this.patchState((state) => ({
                    ...state,
                    user: state.users.find((user) => user.id.toString() === id) as User,
                }));
            })
        )
    );
    
    

}