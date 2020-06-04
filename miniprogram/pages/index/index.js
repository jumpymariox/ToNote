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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJEQUF3RDtBQUd4RCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUUsRUFBRTtJQUNSLE1BQU07SUFDTixDQUFDO0lBQ0QsVUFBVTtRQUNSLElBQU0sSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUE7UUFDcEQsMEJBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUMvQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuaW1wb3J0IHsgbm90ZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9ub3RlLnNlcnZpY2VcIlxuXG4vLyDojrflj5blupTnlKjlrp7kvotcblBhZ2Uoe1xuICBkYXRhOiB7fSxcbiAgb25Mb2FkKCkge1xuICB9LFxuICBjcmVhdGVOb3RlKCkge1xuICAgIGNvbnN0IG5vdGUgPSB7IHRpdGxlOiBcInRlc3RcIiwgY29udGVudDogXCJsYWxhbGxhYWxcIiB9XG4gICAgbm90ZVNlcnZpY2UuY3JlYXRlTm90ZShub3RlKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIHN1Y2Nlc3NcIilcbiAgICB9KVxuICB9XG59KVxuIl19