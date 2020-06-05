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
var pickBy = require("lodash.pickby");
var keys = require("lodash.keys");
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
            var selectedNoteIds = keys(pickBy(this.data.selectedNoteMap, function (value) { return !!value; }));
            this.triggerEvent("selectedNotesChange", { selectedNoteIds: selectedNoteIds });
        }
    },
    lifetimes: {
        attached: function () {
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS1saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90ZS1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQTtBQUN2QyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7QUFjbkMsU0FBUyxDQUF1RDtJQUk5RCxVQUFVLEVBQUU7UUFDVixRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1lBQ1osUUFBUTtnQkFDTixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDeEMsQ0FBQztTQUNGO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLEtBQUs7WUFDWCxLQUFLLEVBQUUsRUFBRTtTQUNWO0tBQ0Y7SUFLRCxJQUFJLEVBQUU7UUFDSixlQUFlLEVBQUUsRUFBRTtLQUNwQjtJQUtELE9BQU8sRUFBRTtRQUNQLGtCQUFrQixZQUFDLEtBQVU7WUFDM0IsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7WUFDdEMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRSx5QkFBdUIsTUFBUSxFQUFFLENBQUMsQ0FBQTtRQUN6RCxDQUFDO1FBQ0QsZ0JBQWdCO1lBQ2QsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtnQkFDNUIsT0FBTTthQUNQO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQ3ZDLENBQUM7UUFDRCxVQUFVLFlBQUMsQ0FBTTs7WUFDVCxJQUFBLGFBQThELEVBQTVELFVBQUUsRUFBRSxzQkFBd0QsQ0FBQztZQUNyRSxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGVBQWUsZUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsZUFBRyxFQUFFLElBQUcsUUFBUSxNQUFFO2FBQ2xFLENBQUMsQ0FBQztZQUVILElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsVUFBQyxLQUFjLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFQLENBQU8sQ0FBQyxDQUFDLENBQUE7WUFDNUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ2pGLENBQUM7S0FDRjtJQUVELFNBQVMsRUFBRTtRQUNULFFBQVE7UUFDUixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwaWNrQnkgPSByZXF1aXJlKFwibG9kYXNoLnBpY2tieVwiKVxuY29uc3Qga2V5cyA9IHJlcXVpcmUoXCJsb2Rhc2gua2V5c1wiKVxuXG5uYW1lc3BhY2UgTm90ZUxpc3Qge1xuICBleHBvcnQgdHlwZSBJRGF0YSA9IHtcbiAgICBzZWxlY3RlZE5vdGVNYXA6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+XG4gIH1cbiAgZXhwb3J0IHR5cGUgSVByb3BlcnR5ID0ge1xuICAgIGVkaXR0aW5nOiBXZWNoYXRNaW5pcHJvZ3JhbS5Db21wb25lbnQuQWxsUHJvcGVydHlcbiAgICBub3RlczogV2VjaGF0TWluaXByb2dyYW0uQ29tcG9uZW50LkFsbFByb3BlcnR5XG4gIH1cbiAgZXhwb3J0IHR5cGUgSU1ldGhvZCA9IHt9XG59XG5cbi8vIHBhZ2VzL2luZGV4L2NvbXBvbmVudHMvbm90ZS1saXN0LmpzXG5Db21wb25lbnQ8Tm90ZUxpc3QuSURhdGEsIE5vdGVMaXN0LklQcm9wZXJ0eSwgTm90ZUxpc3QuSU1ldGhvZD4oe1xuICAvKipcbiAgICogQ29tcG9uZW50IHByb3BlcnRpZXNcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICBlZGl0dGluZzoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIG9ic2VydmVyKCkge1xuICAgICAgICB0aGlzLnNldERhdGEoeyBzZWxlY3RlZE5vdGVNYXA6IHt9IH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgbm90ZXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgdmFsdWU6IFtdXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDb21wb25lbnQgaW5pdGlhbCBkYXRhXG4gICAqL1xuICBkYXRhOiB7XG4gICAgc2VsZWN0ZWROb3RlTWFwOiB7fVxuICB9LFxuXG4gIC8qKlxuICAgKiBDb21wb25lbnQgbWV0aG9kc1xuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIHJlZGlyZWN0VG9Ob3RlUGFnZShldmVudDogYW55KSB7XG4gICAgICBjb25zdCBub3RlSWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgd3gubmF2aWdhdGVUbyh7IHVybDogYC9wYWdlcy9ub3RlL25vdGU/aWQ9JHtub3RlSWR9YCB9KVxuICAgIH0sXG4gICAgcmVhZHlUb0VkaXROb3RlcygpIHtcbiAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMuZWRpdHRpbmcpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudChcInJlYWR5VG9FZGl0Tm90ZXNcIilcbiAgICB9LFxuICAgIHNlbGVjdE5vZGUoZTogYW55KSB7XG4gICAgICBjb25zdCB7IGlkLCBzZWxlY3RlZCB9OiB7IGlkOiBzdHJpbmcsIHNlbGVjdGVkOiBib29sZWFuIH0gPSBlLmRldGFpbDtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHNlbGVjdGVkTm90ZU1hcDogeyAuLi50aGlzLmRhdGEuc2VsZWN0ZWROb3RlTWFwLCBbaWRdOiBzZWxlY3RlZCB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWROb3RlSWRzID0ga2V5cyhwaWNrQnkodGhpcy5kYXRhLnNlbGVjdGVkTm90ZU1hcCwgKHZhbHVlOiBib29sZWFuKSA9PiAhIXZhbHVlKSlcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KFwic2VsZWN0ZWROb3Rlc0NoYW5nZVwiLCB7IHNlbGVjdGVkTm90ZUlkczogc2VsZWN0ZWROb3RlSWRzIH0pO1xuICAgIH1cbiAgfSxcblxuICBsaWZldGltZXM6IHtcbiAgICBhdHRhY2hlZCgpIHtcbiAgICB9XG4gIH1cbn0pXG4iXX0=