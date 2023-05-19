import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import * as Y from 'yjs'

@Component({
  selector: 'app-y-js',
  templateUrl: './y-js.component.html',
  styleUrls: ['./y-js.component.scss']
})
export class YJsComponent implements OnInit {


  demoForm = new FormGroup({
    school: new FormControl(),
    grade: new FormControl()
  })

  ngOnInit(): void {

    // Yjs documents are collections of
    // shared objects that sync automatically.
    const ydoc = new Y.Doc()
    // Define a shared Y.Map instance
    const ymap = ydoc.getMap()
    ymap.set('name', 'Gosho')

    // Create another Yjs document (simulating a remote user)
    // and create some conflicting changes
    const ydocRemote = new Y.Doc()
    const ymapRemote = ydocRemote.getMap()
    ymapRemote.set('age', '20')

    // Merge changes from remote
    const update = Y.encodeStateAsUpdate(ydocRemote)
    Y.applyUpdate(ydoc, update)

    // Observe that the changes have merged
    console.log(ymap.toJSON()) // => { keyA: 'valueA', keyB: 'valueB' }
    this.demoForm.valueChanges.subscribe((result: any) => {
      ymap.set('prop-name1', result)
      
      
    })
    console.log(ymap);
  }

  onSubmit() {

  }


}
