import { Component, OnInit } from '@angular/core';
import { Project } from "../project";
import { ProjectService } from "../project.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  private project: Project;

  constructor(private projectService: ProjectService,
              private router: Router) { }

  ngOnInit() {
    this.project = this.projectService.getter();
  }

  onSubmit() {
    if (this.project.id !== undefined) {
      this.projectService.update(this.project.id, this.project)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['project_list']);
        }, (error => {
          console.log(error);
        }));
    }
  }
}
