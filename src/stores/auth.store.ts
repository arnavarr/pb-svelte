import PocketBase, { Record, type RecordAuthResponse } from 'pocketbase';
import { writable, type Writable } from 'svelte/store';

interface IAuth {
  pb: PocketBase;
  user: Writable<RecordAuthResponse<Record> | null>;
}

const pb = new PocketBase(`${import.meta.env.VITE_POCKETBASE_URL}`);

const user: Writable<RecordAuthResponse<Record> | null> =
  writable<RecordAuthResponse<Record> | null>(null);

export { pb, user };
export type { IAuth };
