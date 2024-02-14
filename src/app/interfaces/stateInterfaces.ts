// User interface
export interface UserState {
  user: string | null
};

export interface AppState {
  user: UserState
}