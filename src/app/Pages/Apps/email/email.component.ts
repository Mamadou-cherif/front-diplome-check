import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
    selector: 'app-email',
    imports: [CommonModule, CKEditorModule, FormsModule],
    templateUrl: './email.component.html',
    styleUrl: './email.component.scss'
})
export class EmailComponent {
  activeTab: string = 'compose';

  public Editor = ClassicEditor;
  editorData: string = `<h3>Hello World!
</h3>
  <p><br data-cke-filler=" true">
  </p>
  <p>Welcome to the pure AlpineJS and Tailwind sliced.</p>`;
}
