"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var note_service_1 = require("../../service/note.service");
Page({
    data: {},
    onLoad: function () {
    },
    createNote: function () {
        var note = { title: "test", content: "lalallaal" };
        note_service_1.noteService.createNote(note).then(function () {
            console.log("create success");
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJEQUF3RDtBQU14RCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUUsRUFBRTtJQUNSLE1BQU07SUFDTixDQUFDO0lBQ0QsVUFBVTtRQUNSLElBQU0sSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUE7UUFDcEQsMEJBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUMvQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuaW1wb3J0IHsgbm90ZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9ub3RlLnNlcnZpY2VcIlxuXG4vLyDojrflj5blupTnlKjlrp7kvotcbi8vIGNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXG5cblxuUGFnZSh7XG4gIGRhdGE6IHt9LFxuICBvbkxvYWQoKSB7XG4gIH0sXG4gIGNyZWF0ZU5vdGUoKSB7XG4gICAgY29uc3Qgbm90ZSA9IHsgdGl0bGU6IFwidGVzdFwiLCBjb250ZW50OiBcImxhbGFsbGFhbFwiIH1cbiAgICBub3RlU2VydmljZS5jcmVhdGVOb3RlKG5vdGUpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJjcmVhdGUgc3VjY2Vzc1wiKVxuICAgIH0pXG4gIH1cbn0pXG4iXX0=