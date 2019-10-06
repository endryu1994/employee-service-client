import { Observable } from "rxjs";
import { ProjectService } from "./../project.service";
import { Project } from "./../project";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Observable<Project[]>;
  error = false;
  message: string;

  constructor(private router: Router,
              private projectService: ProjectService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.error = false;
    this.projects = this.projectService.findAll();
  }

  deleteProject(projectId: number) {
    this.projectService.delete(projectId)
      .subscribe(data => {
        console.log(data);
        this.reloadData();
      },
        error => {
        this.message = JSON.parse(error.error).message;
        this.error = true;
        });
  }

  editProject(project: Project) {
    this.projectService.setter(project);
    this.router.navigate(['update-project']);
  }
}
