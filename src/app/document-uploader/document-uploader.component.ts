import { Component, OnInit } from '@angular/core';
import { MedicalDocument, MedicalDocumentType } from './document-uploader.model';

@Component({
  selector: 'app-document-uploader',
  templateUrl: './document-uploader.component.html',
  styleUrls: ['./document-uploader.component.scss']
})
export class DocumentUploaderComponent {
  files: MedicalDocument[] = [];

  get medicalDocumentTypes(): string[] {
    return Object.values(MedicalDocumentType);
  }

  setDocumentType(file: MedicalDocument, type: string): void {
    file.documentType = type as MedicalDocumentType;
  }

  remove(file: MedicalDocument): void {
    console.log(this.files);
    const index = this.files.indexOf(file);

    if (index >= 0) {
      this.files.splice(index, 1);
    }
  }

  onFilesSelected(): void {
    const inputNode: any = document.querySelector('#uploader');

    this.files = Array.from(inputNode.files);
    this.files.forEach(file => file.documentType = MedicalDocumentType.DialysisTreatment);

    console.log(this.files, this.medicalDocumentTypes);
  }
}
