import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './note';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  note:Note;
    
  constructor(private http: HttpClient) {
    this.note = new Note();
       }

   getNotes(): Observable<Array<Note>> {
    return this.http.get<Array<Note>>('http://localhost:3000/notes');

   }

   addNote(note: Note): Observable<Note> {
    return this.http.post<Note>('http://localhost:3000/notes',note);
   }

}
