import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Observable<Task[]>;

  tasksCollection: AngularFirestoreCollection<Task>;
  constructor(public afs: AngularFirestore) { 

    this.tasksCollection = afs.collection<Task>('tasks');

    // this.tasks = this.afs.collection('tasks').valueChanges();

    this.tasks = this.tasksCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Task;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  getTasks(){
    return this.tasks;
  }
  addTask(task: Task){
    this.tasksCollection.add(task);
  }
}
