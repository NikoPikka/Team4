import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  data: any;

  teams_standings = [];
  teams_schedule = [];
  teams_scores = [];



  public setData(data){
    this.data = data;
    console.log(data);
  }


  public setTeamsStandings(teams){
    this.teams_standings = teams as any[];
  }

  public setTeamsSchedule(teams){
    this.teams_schedule = teams as any[];
  }

  public setTeamsScores(teams){
    this.teams_scores = teams as any[];
  }


  public getData(){
    return this.data;
  }

  public getTeamsSchedule(){
    return this.teams_schedule;
  }

  public getTeamsStandings(){
    return this.teams_standings;
  }

  public getTeamsScores(){
    return this.teams_scores;
  }
}
