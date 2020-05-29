"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var note_service_1 = require("../../service/note.service");
Page({
    data: {
        tabbar: [
            { text: "笔记", iconPath: "../../../asset/img/note.png", selectedIconPath: "../../../asset/img/note_active.png" },
            { text: "个人", iconPath: "../../../asset/img/user.png", selectedIconPath: "../../../asset/img/user_active.png" }
        ]
    },
    onLoad: function () {
    },
    createNote: function () {
        var note = { title: "test", content: "lalallaal" };
        note_service_1.noteService.createNote(note).then(function () {
            console.log("create success");
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDJEQUF3RDtBQUt4RCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUU7WUFDTixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLDZCQUE2QixFQUFFLGdCQUFnQixFQUFFLG9DQUFvQyxFQUFFO1lBQy9HLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsNkJBQTZCLEVBQUUsZ0JBQWdCLEVBQUUsb0NBQW9DLEVBQUU7U0FDaEg7S0FDRjtJQUNELE1BQU07SUFDTixDQUFDO0lBQ0QsVUFBVTtRQUNSLElBQU0sSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUE7UUFDcEQsMEJBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUMvQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuXG5pbXBvcnQgeyBub3RlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL25vdGUuc2VydmljZVwiXG5cbi8vIOiOt+WPluW6lOeUqOWunuS+i1xuLy8gY29uc3QgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KClcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB0YWJiYXI6IFtcbiAgICAgIHsgdGV4dDogXCLnrJTorrBcIiwgaWNvblBhdGg6IFwiLi4vLi4vLi4vYXNzZXQvaW1nL25vdGUucG5nXCIsIHNlbGVjdGVkSWNvblBhdGg6IFwiLi4vLi4vLi4vYXNzZXQvaW1nL25vdGVfYWN0aXZlLnBuZ1wiIH0sXG4gICAgICB7IHRleHQ6IFwi5Liq5Lq6XCIsIGljb25QYXRoOiBcIi4uLy4uLy4uL2Fzc2V0L2ltZy91c2VyLnBuZ1wiLCBzZWxlY3RlZEljb25QYXRoOiBcIi4uLy4uLy4uL2Fzc2V0L2ltZy91c2VyX2FjdGl2ZS5wbmdcIiB9XG4gICAgXVxuICB9LFxuICBvbkxvYWQoKSB7XG4gIH0sXG4gIGNyZWF0ZU5vdGUoKSB7XG4gICAgY29uc3Qgbm90ZSA9IHsgdGl0bGU6IFwidGVzdFwiLCBjb250ZW50OiBcImxhbGFsbGFhbFwiIH1cbiAgICBub3RlU2VydmljZS5jcmVhdGVOb3RlKG5vdGUpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJjcmVhdGUgc3VjY2Vzc1wiKVxuICAgIH0pXG4gIH1cbn0pXG4iXX0=