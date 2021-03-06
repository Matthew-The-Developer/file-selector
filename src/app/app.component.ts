import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocumentUploaderComponent } from './document-uploader/document-uploader.component';
import { MedicalDocumentType } from './document-uploader/document-uploader.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  files: File[] = [];

  constructor(public dialog: MatDialog) { }
  
  get medicalDocumentTypes(): string[] {
    return Object.values(MedicalDocumentType);
  }

  onFilesSelected(): void {
    const inputNode: any = document.querySelector('#file');

    this.files = Array.from(inputNode.files);

    console.log(inputNode.files);
  }

  remove(file: File): void {
    console.log(this.files);
    const index = this.files.indexOf(file);

    if (index >= 0) {
      this.files.splice(index, 1);
    }
  }
  
  openDocumentUploader(): void {
    this.dialog.open(DocumentUploaderComponent, {
      height: 'auto',
      width: '820px',
      panelClass: 'document-uploader-dialog-container',
      autoFocus: false,
      hasBackdrop: false,
    });
  }
}
