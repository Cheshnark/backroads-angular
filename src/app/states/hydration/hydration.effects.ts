// hydration.effects.ts
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, OnInitEffects } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { distinctUntilChanged, exhaustMap, map, switchMap, tap } from "rxjs/operators";
import { AppState } from "../../interfaces/stateInterfaces";
import * as HydrationActions from "./hydration.actions";
import { login } from '../user/user.action';

@Injectable()
export class HydrationEffects implements OnInitEffects {
  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(login),
      map(() => {
        const storageValue = localStorage.getItem("state");
        if (storageValue) {
          try {
            const state = JSON.parse(storageValue);
            return HydrationActions.hydrateSuccess({ state });
          } catch {
            localStorage.removeItem("state");
          }
        }
        return HydrationActions.hydrateFailure();
      })
    )
  );

  constructor(private action$: Actions, private store: Store<AppState>) {}

  ngrxOnInitEffects(): Action {
    const storageItem:any = localStorage.getItem('userStore');
    let username: string | null = null
    const userObject = JSON.parse(storageItem)
    username = userObject.user.username

    return login({username: username});
  }

  serialize$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(HydrationActions.hydrateSuccess, HydrationActions.hydrateFailure),
        switchMap(() => this.store),
        distinctUntilChanged(),
        tap((state) => localStorage.setItem("userStore", JSON.stringify(state)))
      ),
    { dispatch: false }
  );
}
