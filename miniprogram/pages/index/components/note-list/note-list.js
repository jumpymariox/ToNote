"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var note_service_1 = require("../../../../service/note.service");
Component({
    properties: {},
    data: {
        notes: []
    },
    methods: {
        redirectToNotePage: function (event) {
            var noteId = event.currentTarget.id;
            wx.navigateTo({ url: "/pages/note/note?id=" + noteId });
        }
    },
    lifetimes: {
        attached: function () {
            var _this = this;
            note_service_1.noteService.fetchNotes().then(function (_a) {
                var notes = _a.notes;
                _this.setData({ notes: notes });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS1saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90ZS1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUVBQThEO0FBTzlELFNBQVMsQ0FBNEI7SUFJbkMsVUFBVSxFQUFFLEVBQUU7SUFLZCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsRUFBRTtLQUNWO0lBS0QsT0FBTyxFQUFFO1FBQ1Asa0JBQWtCLFlBQUMsS0FBVTtZQUMzQixJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztZQUN0QyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxFQUFFLHlCQUF1QixNQUFRLEVBQUUsQ0FBQyxDQUFBO1FBQ3pELENBQUM7S0FDRjtJQUVELFNBQVMsRUFBRTtRQUNULFFBQVE7WUFBUixpQkFJQztZQUhDLDBCQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBNEI7b0JBQTFCLGdCQUFLO2dCQUNwQyxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7WUFDaEMsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBub3RlU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlL25vdGUuc2VydmljZVwiXG5cbnR5cGUgSURhdGEgPSB7IG5vdGVzOiBOb3RlW10gfVxudHlwZSBJUHJvcGVydHkgPSB7fVxudHlwZSBJTWV0aG9kID0ge31cblxuLy8gcGFnZXMvaW5kZXgvY29tcG9uZW50cy9ub3RlLWxpc3QuanNcbkNvbXBvbmVudDxJRGF0YSwgSVByb3BlcnR5LCBJTWV0aG9kPih7XG4gIC8qKlxuICAgKiBDb21wb25lbnQgcHJvcGVydGllc1xuICAgKi9cbiAgcHJvcGVydGllczoge30sXG5cbiAgLyoqXG4gICAqIENvbXBvbmVudCBpbml0aWFsIGRhdGFcbiAgICovXG4gIGRhdGE6IHtcbiAgICBub3RlczogW11cbiAgfSxcblxuICAvKipcbiAgICogQ29tcG9uZW50IG1ldGhvZHNcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICByZWRpcmVjdFRvTm90ZVBhZ2UoZXZlbnQ6IGFueSkge1xuICAgICAgY29uc3Qgbm90ZUlkID0gZXZlbnQuY3VycmVudFRhcmdldC5pZDtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6IGAvcGFnZXMvbm90ZS9ub3RlP2lkPSR7bm90ZUlkfWAgfSlcbiAgICB9XG4gIH0sXG5cbiAgbGlmZXRpbWVzOiB7XG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICBub3RlU2VydmljZS5mZXRjaE5vdGVzKCkudGhlbigoeyBub3RlcyB9OiB7IG5vdGVzOiBOb3RlW10gfSkgPT4ge1xuICAgICAgICB0aGlzLnNldERhdGEoeyBub3Rlczogbm90ZXMgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KVxuIl19