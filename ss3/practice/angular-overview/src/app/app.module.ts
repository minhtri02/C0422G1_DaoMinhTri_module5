import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontSizeEditorComponent} from './font-size-editor/font-size-editor.component';
import {PetComponent} from './pet/pet.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductComponent} from './product/product-list/product.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {ColorComponent} from './color/color.component';
import {ArticleComponent} from './article/article.component';
import {LikeComponent} from './like/like.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NameCardComponent} from './name-card/name-card.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {RatingBarComponentComponent} from './rating-bar-component/rating-bar-component.component';
import {CountdownTimerComponent} from './countdown-timer/countdown-timer.component';
import {TodoComponent} from './todoo/todo/todo.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponentComponent} from './login-component/login-component.component';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {DictionaryInfoComponent} from './dictionary-info/dictionary-info.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {HttpClientModule} from "@angular/common/http";
import { TodoEditComponent } from './todoo/todo-edit/todo-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    PetComponent,
    ProductComponent,
    CalculatorComponent,
    ColorComponent,
    ArticleComponent,
    LikeComponent,
    HeaderComponent,
    FooterComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponentComponent,
    CountdownTimerComponent,
    TodoComponent,
    RegisterComponent,
    LoginComponentComponent,
    DictionaryComponent,
    DictionaryInfoComponent,
    ProductCreateComponent,
    ProductEditComponent,
    TodoEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
