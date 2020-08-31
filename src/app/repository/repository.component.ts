import { Component, OnInit } from '@angular/core';
import { GithubService} from '../services/github.service';
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

user:User;
repo:Repository;

  constructor(public githubService:GithubService) { }

  getRepo(searchName){
    this.githubService.findUser(searchName).then(
      (success)=>{
        this.user= this.githubService.user;
      },
      (error)=>{
        console.log(error);
      }
    )
    this.githubService.getRepo(searchName).then(
      (success)=>{
        this.repo= this.githubService.repo;
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  ngOnInit(): void {
    this.getRepo("priscillapepe")
  }

}
