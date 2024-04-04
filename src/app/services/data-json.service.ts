import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataJsonService {

  constructor( private http:HttpClient) { }

  howToUseData(){
    return this.http.get('https://fabrikapps.es/ZENT_API/howUse.php');
  } 

  questionsData(){
    return this.http.get('https://fabrikapps.es/ZENT_API/faq.php');
  }
}
