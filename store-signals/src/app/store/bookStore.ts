import { signalStore, withState } from '@ngrx/signals';
import { Book } from '../models/book.model'

type BooksState = {
    books: Book[];
    isLoading: boolean;
    filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: BooksState = {
    books: [{
        id: '123',
        title: 'John Doe',
        author: 'Albert A.'
    }],
    isLoading: false,
    filter: { query: 'test', order: 'asc' },
};

export const BooksStore = signalStore(
    { providedIn: "root" },
    withState(initialState)
);