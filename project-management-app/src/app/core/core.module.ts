import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../authorization/auth.module';
import { StartScreenModule } from '../start-screen/start-screen.module';
import { WorkspaceModule } from '../workspace/workspace.module';
import { CommonInterceptor } from './services/common.interceptor';
import { AuthEffects } from './store/effects/auth.effects';
import { BoardEffects } from './store/effects/board.effects';
import { ColumnEffects } from './store/effects/column.effects';
import { TaskEffects } from './store/effects/task.effects';
import { UserEffects } from './store/effects/user.effects';
import { authReducer } from './store/reducers/auth.reducer';
import { userReducer } from './store/reducers/user.reducer';
import { boardReducer } from './store/reducers/board.reducer';
import { localizationReducer } from './store/reducers/localization.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { TokenInterceptor } from './services/token.interceptor';
import { selectedBoardReducer } from './store/reducers/selectedBoard.reducer';
import { currentUserReducer } from './store/reducers/currentUser.reducer';
import { NotificationEffects } from './store/effects/notification.effects';

const COMMON_INTERCEPTOR = { provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true };
const TOKEN_INTERCEPTOR = { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true };

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    StoreModule.forRoot({
      token: authReducer,
      users: userReducer,
      boards: boardReducer,
      selectedBoard: selectedBoardReducer,
      currentUser: currentUserReducer,
      localization: localizationReducer,
    }),
    EffectsModule.forRoot([
      AuthEffects,
      BoardEffects,
      ColumnEffects,
      TaskEffects,
      UserEffects,
      NotificationEffects,
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      name: 'PM App',
      logOnly: environment.production,
    }),
    SharedModule,
    StartScreenModule,
    AuthModule,
    WorkspaceModule,
  ],
  exports: [StoreModule, StartScreenModule, WorkspaceModule],
  providers: [COMMON_INTERCEPTOR, TOKEN_INTERCEPTOR],
})
export class CoreModule {}
