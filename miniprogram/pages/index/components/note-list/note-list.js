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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var keys = require("lodash.keys");
var lodash_pickby_1 = __importDefault(require("lodash.pickby"));
Component({
    properties: {
        editting: {
            type: Boolean,
            value: false,
            observer: function () {
                this.setData({ selectedNoteMap: {} });
            }
        },
        notes: {
            type: Array,
            value: []
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
            var selectedNoteIds = keys(lodash_pickby_1.default(this.data.selectedNoteMap, function (value) { return !!value; }));
            this.triggerEvent("selectedNotesChange", { selectedNoteIds: selectedNoteIds });
        }
    },
    lifetimes: {
        attached: function () {
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS1saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90ZS1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7QUFDbkMsZ0VBQW1DO0FBY25DLFNBQVMsQ0FBdUQ7SUFJOUQsVUFBVSxFQUFFO1FBQ1YsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVE7Z0JBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLENBQUM7U0FDRjtRQUNELEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxLQUFLO1lBQ1gsS0FBSyxFQUFFLEVBQUU7U0FDVjtLQUNGO0lBS0QsSUFBSSxFQUFFO1FBQ0osZUFBZSxFQUFFLEVBQUU7S0FDcEI7SUFLRCxPQUFPLEVBQUU7UUFDUCxrQkFBa0IsWUFBQyxLQUFVO1lBQzNCLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLEVBQUUseUJBQXVCLE1BQVEsRUFBRSxDQUFDLENBQUE7UUFDekQsQ0FBQztRQUNELGdCQUFnQjtZQUNkLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0JBQzVCLE9BQU07YUFDUDtZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUN2QyxDQUFDO1FBQ0QsVUFBVSxZQUFDLENBQU07O1lBQ1QsSUFBQSxhQUE4RCxFQUE1RCxVQUFFLEVBQUUsc0JBQXdELENBQUM7WUFDckUsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxlQUFlLGVBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLGVBQUcsRUFBRSxJQUFHLFFBQVEsTUFBRTthQUNsRSxDQUFDLENBQUM7WUFFSCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsdUJBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxVQUFDLEtBQWMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLENBQUMsQ0FBQTtZQUM1RixJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDakYsQ0FBQztLQUNGO0lBRUQsU0FBUyxFQUFFO1FBQ1QsUUFBUTtRQUNSLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vY29uc3QgcGlja0J5ID0gcmVxdWlyZShcImxvZGFzaC5waWNrYnlcIilcbmNvbnN0IGtleXMgPSByZXF1aXJlKFwibG9kYXNoLmtleXNcIilcbmltcG9ydCBwaWNrQnkgZnJvbSBcImxvZGFzaC5waWNrYnlcIjtcblxubmFtZXNwYWNlIE5vdGVMaXN0IHtcbiAgZXhwb3J0IHR5cGUgSURhdGEgPSB7XG4gICAgc2VsZWN0ZWROb3RlTWFwOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPlxuICB9XG4gIGV4cG9ydCB0eXBlIElQcm9wZXJ0eSA9IHtcbiAgICBlZGl0dGluZzogV2VjaGF0TWluaXByb2dyYW0uQ29tcG9uZW50LkFsbFByb3BlcnR5XG4gICAgbm90ZXM6IFdlY2hhdE1pbmlwcm9ncmFtLkNvbXBvbmVudC5BbGxQcm9wZXJ0eVxuICB9XG4gIGV4cG9ydCB0eXBlIElNZXRob2QgPSB7fVxufVxuXG4vLyBwYWdlcy9pbmRleC9jb21wb25lbnRzL25vdGUtbGlzdC5qc1xuQ29tcG9uZW50PE5vdGVMaXN0LklEYXRhLCBOb3RlTGlzdC5JUHJvcGVydHksIE5vdGVMaXN0LklNZXRob2Q+KHtcbiAgLyoqXG4gICAqIENvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgZWRpdHRpbmc6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICBvYnNlcnZlcigpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHsgc2VsZWN0ZWROb3RlTWFwOiB7fSB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG5vdGVzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHZhbHVlOiBbXVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ29tcG9uZW50IGluaXRpYWwgZGF0YVxuICAgKi9cbiAgZGF0YToge1xuICAgIHNlbGVjdGVkTm90ZU1hcDoge31cbiAgfSxcblxuICAvKipcbiAgICogQ29tcG9uZW50IG1ldGhvZHNcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICByZWRpcmVjdFRvTm90ZVBhZ2UoZXZlbnQ6IGFueSkge1xuICAgICAgY29uc3Qgbm90ZUlkID0gZXZlbnQuY3VycmVudFRhcmdldC5pZDtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6IGAvcGFnZXMvbm90ZS9ub3RlP2lkPSR7bm90ZUlkfWAgfSlcbiAgICB9LFxuICAgIHJlYWR5VG9FZGl0Tm90ZXMoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzLmVkaXR0aW5nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoXCJyZWFkeVRvRWRpdE5vdGVzXCIpXG4gICAgfSxcbiAgICBzZWxlY3ROb2RlKGU6IGFueSkge1xuICAgICAgY29uc3QgeyBpZCwgc2VsZWN0ZWQgfTogeyBpZDogc3RyaW5nLCBzZWxlY3RlZDogYm9vbGVhbiB9ID0gZS5kZXRhaWw7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzZWxlY3RlZE5vdGVNYXA6IHsgLi4udGhpcy5kYXRhLnNlbGVjdGVkTm90ZU1hcCwgW2lkXTogc2VsZWN0ZWQgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkTm90ZUlkcyA9IGtleXMocGlja0J5KHRoaXMuZGF0YS5zZWxlY3RlZE5vdGVNYXAsICh2YWx1ZTogYm9vbGVhbikgPT4gISF2YWx1ZSkpXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudChcInNlbGVjdGVkTm90ZXNDaGFuZ2VcIiwgeyBzZWxlY3RlZE5vdGVJZHM6IHNlbGVjdGVkTm90ZUlkcyB9KTtcbiAgICB9XG4gIH0sXG5cbiAgbGlmZXRpbWVzOiB7XG4gICAgYXR0YWNoZWQoKSB7XG4gICAgfVxuICB9XG59KVxuIl19