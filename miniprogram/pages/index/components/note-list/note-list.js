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
            note_service_1.noteService.fetchNotes().then(function (_a) {
                var notes = _a.notes;
                _this.setData({ notes: notes });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS1saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90ZS1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUVBQThEO0FBTzlELFNBQVMsQ0FBNEI7SUFJbkMsVUFBVSxFQUFFLEVBQUU7SUFLZCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsRUFBRTtLQUNWO0lBS0QsT0FBTyxFQUFFLEVBRVI7SUFFRCxTQUFTLEVBQUU7UUFDVCxRQUFRO1lBQVIsaUJBSUM7WUFIQywwQkFBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQTRCO29CQUExQixnQkFBSztnQkFDcEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO1lBQ2hDLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbm90ZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZS9ub3RlLnNlcnZpY2VcIlxuXG50eXBlIElEYXRhID0geyBub3RlczogTm90ZVtdIH1cbnR5cGUgSVByb3BlcnR5ID0ge31cbnR5cGUgSU1ldGhvZCA9IHt9XG5cbi8vIHBhZ2VzL2luZGV4L2NvbXBvbmVudHMvbm90ZS1saXN0LmpzXG5Db21wb25lbnQ8SURhdGEsIElQcm9wZXJ0eSwgSU1ldGhvZD4oe1xuICAvKipcbiAgICogQ29tcG9uZW50IHByb3BlcnRpZXNcbiAgICovXG4gIHByb3BlcnRpZXM6IHt9LFxuXG4gIC8qKlxuICAgKiBDb21wb25lbnQgaW5pdGlhbCBkYXRhXG4gICAqL1xuICBkYXRhOiB7XG4gICAgbm90ZXM6IFtdXG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbXBvbmVudCBtZXRob2RzXG4gICAqL1xuICBtZXRob2RzOiB7XG5cbiAgfSxcblxuICBsaWZldGltZXM6IHtcbiAgICBhdHRhY2hlZCgpIHtcbiAgICAgIG5vdGVTZXJ2aWNlLmZldGNoTm90ZXMoKS50aGVuKCh7IG5vdGVzIH06IHsgbm90ZXM6IE5vdGVbXSB9KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7IG5vdGVzOiBub3RlcyB9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pXG4iXX0=