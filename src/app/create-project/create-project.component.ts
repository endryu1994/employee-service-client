import { Component, OnInit } from '@angular/core';
import { Project } from "../project";
import { ProjectService } from "../project.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  project: Project = new Project();

  constructor(private router: Router,
              private projectService: ProjectService) { }

  ngOnInit() {}

  save() {
    this.projectService.add(this.project)
      .subscribe(data => console.log(data),
          error => console.log(error));
    this.project = new Project();
  }

  onSubmit() {
    this.save();
    this.router.navigate(['project_list']);
  }
}
