import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Response } from 'src/app/interface/response.interface';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {
  response: Response;
  mode: 'edit' | 'locked' = 'locked';
  buttonText: 'Edit' | 'Save' = 'Edit';

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.userService.getUser(params.get('uuid')!).subscribe((response: any) => {
        console.log(response);
        this.response = response;
        console.log(response);
        
      })
    })
  }

  changeMode(mode?: 'edit' | 'locked'): void {
    this.mode = this.mode === 'locked' ? 'edit' : 'locked';
    this.buttonText = this.buttonText === 'Edit' ? 'Save' : 'Edit';
    if (mode === 'edit') {
      console.log('Updating user for the backend');
      
    }
  }


}
