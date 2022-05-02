import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostLogsService {
  private url = "https://api.jsonbin.io/b/6250885bd20ace068f959856/17";
  headers = { headers: new Headers({ 'Content-Type': 'application/json' })};

  constructor(private http: HttpClient) { }

  getLogs(){
    //returns observable
    return this.http.get(this.url); 
  }

  
  // updateLog(log:any){
  //   return this.http.put(this.url + '/' + log.id, log)
  // }

  deleteLogs(id: any[]){
    return this.http.delete("https://localhost:5001/api/DatabaseLogs/DeleteDatabaseLog?LogID="+ id)
   }
}
