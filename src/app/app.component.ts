import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'file-selector';
  
  files: File[] = [];
  
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
}
