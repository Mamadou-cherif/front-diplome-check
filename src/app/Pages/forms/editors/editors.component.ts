import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
    selector: 'app-editors',
    imports: [CKEditorModule, FormsModule],
    templateUrl: './editors.component.html',
    styleUrl: './editors.component.scss'
})
export class EditorsComponent {
  public Editor = ClassicEditor;
  editorData: string = `<h3>Hello World!
</h3>
  <p><br data-cke-filler=" true">
  </p>
  <p>Welcome to the pure AlpineJS and Tailwind sliced.</p>`;
}
