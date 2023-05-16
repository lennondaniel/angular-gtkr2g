import { TabModule, ToolbarModule } from '@syncfusion/ej2-angular-navigations';

import { UploaderModule, SignatureModule, TextBoxModule, NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';

import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { CheckBoxModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';

import { ColorPickerModule } from '@syncfusion/ej2-angular-inputs';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';

@NgModule({ declarations: [ AppComponent ], imports: [ BrowserModule, ColorPickerModule, BrowserModule, CheckBoxModule, DropDownListModule, TabModule, ToolbarModule, UploaderModule, SignatureModule, TextBoxModule, DialogModule, ButtonModule, NumericTextBoxModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
