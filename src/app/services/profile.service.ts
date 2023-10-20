import { Injectable } from "@angular/core";
import { Observable, map, of, timeout } from "rxjs";

export type Profile = {
  id: number,
  roles: string[],
  name: string,
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  getProfile(): Observable<Profile> {
    return of().pipe(
      timeout(50),
      map(() => ({
        id: 592281,
        roles: ['director,owner'],
        name: 'Liz '
      }))
    )
  }
}