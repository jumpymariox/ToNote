"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var note_service_1 = require("../../service/note.service");
Page({
    data: {
        showAddBtn: true,
        showDeleteBtn: false,
        showUndoBtn: false,
        editting: false
    },
    onLoad: function () {
    },
    createNote: function () {
        var note = { title: "test", content: "lalallaal" };
        note_service_1.noteService.createNote(note).then(function () {
            console.log("create success");
        });
    },
    readyToEditNotes: function () {
        this.setData({
            showAddBtn: false,
            showDeleteBtn: true,
            showUndoBtn: true,
            editting: true
        });
    },
    cancelEditNotes: function () {
        this.setData({
            showAddBtn: true,
            showDeleteBtn: false,
            showUndoBtn: false,
            editting: false
        });
    },
    deleteNotes: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJEQUF3RDtBQUd4RCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUUsSUFBSTtRQUNoQixhQUFhLEVBQUUsS0FBSztRQUNwQixXQUFXLEVBQUUsS0FBSztRQUNsQixRQUFRLEVBQUUsS0FBSztLQUNoQjtJQUNELE1BQU07SUFDTixDQUFDO0lBQ0QsVUFBVTtRQUNSLElBQU0sSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUE7UUFDcEQsMEJBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUMvQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsVUFBVSxFQUFFLEtBQUs7WUFDakIsYUFBYSxFQUFFLElBQUk7WUFDbkIsV0FBVyxFQUFFLElBQUk7WUFDakIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsS0FBSztZQUNwQixXQUFXLEVBQUUsS0FBSztZQUNsQixRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsV0FBVztJQUVYLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuaW1wb3J0IHsgbm90ZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9ub3RlLnNlcnZpY2VcIlxuXG4vLyDojrflj5blupTnlKjlrp7kvotcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgc2hvd0FkZEJ0bjogdHJ1ZSxcbiAgICBzaG93RGVsZXRlQnRuOiBmYWxzZSxcbiAgICBzaG93VW5kb0J0bjogZmFsc2UsXG4gICAgZWRpdHRpbmc6IGZhbHNlXG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgfSxcbiAgY3JlYXRlTm90ZSgpIHtcbiAgICBjb25zdCBub3RlID0geyB0aXRsZTogXCJ0ZXN0XCIsIGNvbnRlbnQ6IFwibGFsYWxsYWFsXCIgfVxuICAgIG5vdGVTZXJ2aWNlLmNyZWF0ZU5vdGUobm90ZSkudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSBzdWNjZXNzXCIpXG4gICAgfSlcbiAgfSxcbiAgcmVhZHlUb0VkaXROb3RlcygpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgc2hvd0FkZEJ0bjogZmFsc2UsXG4gICAgICBzaG93RGVsZXRlQnRuOiB0cnVlLFxuICAgICAgc2hvd1VuZG9CdG46IHRydWUsXG4gICAgICBlZGl0dGluZzogdHJ1ZVxuICAgIH0pXG4gIH0sXG5cbiAgY2FuY2VsRWRpdE5vdGVzKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBzaG93QWRkQnRuOiB0cnVlLFxuICAgICAgc2hvd0RlbGV0ZUJ0bjogZmFsc2UsXG4gICAgICBzaG93VW5kb0J0bjogZmFsc2UsXG4gICAgICBlZGl0dGluZzogZmFsc2VcbiAgICB9KVxuICB9LFxuXG4gIGRlbGV0ZU5vdGVzKCkge1xuXG4gIH1cbn0pXG4iXX0=