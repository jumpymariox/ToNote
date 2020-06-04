"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var note_service_1 = require("../../../../service/note.service");
Component({
    properties: {
        editting: {
            type: Boolean, value: false, observer: function () {
                this.setData({ selectedNoteMap: {} });
            }
        }
    },
    data: {
        selectedNoteMap: {}
    },
    methods: {
        redirectToNotePage: function (event) {
            var noteId = event.currentTarget.id;
            wx.navigateTo({ url: "/pages/note/note?id=" + noteId });
        },
        readyToEditNotes: function () {
            if (this.properties.editting) {
                return;
            }
            this.triggerEvent("readyToEditNotes");
        },
        selectNode: function (e) {
            var _a;
            var _b = e.detail, id = _b.id, selected = _b.selected;
            this.setData({
                selectedNoteMap: __assign({}, this.data.selectedNoteMap, (_a = {}, _a[id] = selected, _a))
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS1saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90ZS1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBOEQ7QUFZOUQsU0FBUyxDQUE0QjtJQUluQyxVQUFVLEVBQUU7UUFDVixRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUTtnQkFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLENBQUM7U0FDRjtLQUNGO0lBS0QsSUFBSSxFQUFFO1FBQ0osZUFBZSxFQUFFLEVBQUU7S0FDcEI7SUFLRCxPQUFPLEVBQUU7UUFDUCxrQkFBa0IsWUFBQyxLQUFVO1lBQzNCLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLEVBQUUseUJBQXVCLE1BQVEsRUFBRSxDQUFDLENBQUE7UUFDekQsQ0FBQztRQUNELGdCQUFnQjtZQUNkLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0JBQzVCLE9BQU07YUFDUDtZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUN2QyxDQUFDO1FBQ0QsVUFBVSxZQUFDLENBQU07O1lBQ1QsSUFBQSxhQUE4RCxFQUE1RCxVQUFFLEVBQUUsc0JBQXdELENBQUM7WUFDckUsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxlQUFlLGVBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLGVBQUcsRUFBRSxJQUFHLFFBQVEsTUFBRTthQUNsRSxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7SUFFRCxTQUFTLEVBQUU7UUFDVCxRQUFRO1lBQVIsaUJBSUM7WUFIQywwQkFBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQTRCO29CQUExQixnQkFBSztnQkFDcEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO1lBQ2hDLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbm90ZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZS9ub3RlLnNlcnZpY2VcIlxuXG50eXBlIElEYXRhID0ge1xuICBub3Rlcz86IE5vdGVbXSxcbiAgc2VsZWN0ZWROb3RlTWFwOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPlxufVxudHlwZSBJUHJvcGVydHkgPSB7XG4gIGVkaXR0aW5nOiBXZWNoYXRNaW5pcHJvZ3JhbS5Db21wb25lbnQuQWxsUHJvcGVydHlcbn1cbnR5cGUgSU1ldGhvZCA9IHt9XG5cbi8vIHBhZ2VzL2luZGV4L2NvbXBvbmVudHMvbm90ZS1saXN0LmpzXG5Db21wb25lbnQ8SURhdGEsIElQcm9wZXJ0eSwgSU1ldGhvZD4oe1xuICAvKipcbiAgICogQ29tcG9uZW50IHByb3BlcnRpZXNcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICBlZGl0dGluZzoge1xuICAgICAgdHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCBvYnNlcnZlcigpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHsgc2VsZWN0ZWROb3RlTWFwOiB7fSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbXBvbmVudCBpbml0aWFsIGRhdGFcbiAgICovXG4gIGRhdGE6IHtcbiAgICBzZWxlY3RlZE5vdGVNYXA6IHt9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbXBvbmVudCBtZXRob2RzXG4gICAqL1xuICBtZXRob2RzOiB7XG4gICAgcmVkaXJlY3RUb05vdGVQYWdlKGV2ZW50OiBhbnkpIHtcbiAgICAgIGNvbnN0IG5vdGVJZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHsgdXJsOiBgL3BhZ2VzL25vdGUvbm90ZT9pZD0ke25vdGVJZH1gIH0pXG4gICAgfSxcbiAgICByZWFkeVRvRWRpdE5vdGVzKCkge1xuICAgICAgaWYgKHRoaXMucHJvcGVydGllcy5lZGl0dGluZykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KFwicmVhZHlUb0VkaXROb3Rlc1wiKVxuICAgIH0sXG4gICAgc2VsZWN0Tm9kZShlOiBhbnkpIHtcbiAgICAgIGNvbnN0IHsgaWQsIHNlbGVjdGVkIH06IHsgaWQ6IHN0cmluZywgc2VsZWN0ZWQ6IGJvb2xlYW4gfSA9IGUuZGV0YWlsO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgc2VsZWN0ZWROb3RlTWFwOiB7IC4uLnRoaXMuZGF0YS5zZWxlY3RlZE5vdGVNYXAsIFtpZF06IHNlbGVjdGVkIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBsaWZldGltZXM6IHtcbiAgICBhdHRhY2hlZCgpIHtcbiAgICAgIG5vdGVTZXJ2aWNlLmZldGNoTm90ZXMoKS50aGVuKCh7IG5vdGVzIH06IHsgbm90ZXM6IE5vdGVbXSB9KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7IG5vdGVzOiBub3RlcyB9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pXG4iXX0=