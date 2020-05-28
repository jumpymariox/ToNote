"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var note_service_1 = require("../../../../service/note.service");
Component({
    properties: {},
    data: {
        notes: []
    },
    methods: {},
    lifetimes: {
        attached: function () {
            var _this = this;
            var noteService = new note_service_1.NoteService();
            noteService.fetchNotes().then(function (_a) {
                var notes = _a.notes;
                _this.setData({ notes: notes });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS1saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90ZS1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUVBQThEO0FBTzlELFNBQVMsQ0FBNEI7SUFJbkMsVUFBVSxFQUFFLEVBQUU7SUFLZCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsRUFBRTtLQUNWO0lBS0QsT0FBTyxFQUFFLEVBRVI7SUFFRCxTQUFTLEVBQUU7UUFDVCxRQUFRO1lBQVIsaUJBS0M7WUFKQyxJQUFNLFdBQVcsR0FBRyxJQUFJLDBCQUFXLEVBQUUsQ0FBQztZQUN0QyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBNEI7b0JBQTFCLGdCQUFLO2dCQUNwQyxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7WUFDaEMsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb3RlU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlL25vdGUuc2VydmljZVwiXG5cbnR5cGUgSURhdGEgPSB7IG5vdGVzOiBOb3RlW10gfVxudHlwZSBJUHJvcGVydHkgPSB7fVxudHlwZSBJTWV0aG9kID0ge31cblxuLy8gcGFnZXMvaW5kZXgvY29tcG9uZW50cy9ub3RlLWxpc3QuanNcbkNvbXBvbmVudDxJRGF0YSwgSVByb3BlcnR5LCBJTWV0aG9kPih7XG4gIC8qKlxuICAgKiBDb21wb25lbnQgcHJvcGVydGllc1xuICAgKi9cbiAgcHJvcGVydGllczoge30sXG5cbiAgLyoqXG4gICAqIENvbXBvbmVudCBpbml0aWFsIGRhdGFcbiAgICovXG4gIGRhdGE6IHtcbiAgICBub3RlczogW11cbiAgfSxcblxuICAvKipcbiAgICogQ29tcG9uZW50IG1ldGhvZHNcbiAgICovXG4gIG1ldGhvZHM6IHtcblxuICB9LFxuXG4gIGxpZmV0aW1lczoge1xuICAgIGF0dGFjaGVkKCkge1xuICAgICAgY29uc3Qgbm90ZVNlcnZpY2UgPSBuZXcgTm90ZVNlcnZpY2UoKTtcbiAgICAgIG5vdGVTZXJ2aWNlLmZldGNoTm90ZXMoKS50aGVuKCh7IG5vdGVzIH06IHsgbm90ZXM6IE5vdGVbXSB9KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7IG5vdGVzOiBub3RlcyB9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pXG4iXX0=