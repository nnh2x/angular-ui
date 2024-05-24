import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { User, Users } from 'src/interface/users.interface';
import { UsersService } from 'src/services/users.service';

@Component({
  standalone: true,
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class UserDetailComponent {

  user$!: Observable<User>;
  constructor(private route: ActivatedRoute, private api: UsersService) { }

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      map((params) => params.get('id')),
      switchMap((id) => this.api.getArticleBySlug(id || ''))
    );
  }


}
