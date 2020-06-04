"use strict";
Component({
    properties: {
        note: {
            type: Object
        },
        editting: {
            type: Boolean
        },
        selected: {
            type: Boolean
        }
    },
    data: {},
    methods: {
        selectNote: function () {
            this.triggerEvent("selectNode", { id: this.properties.note.id, selected: !this.properties.selected });
        }
    },
    lifetimes: {
        attached: function () {
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5vdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1NBQ2I7UUFDRCxRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsT0FBTztTQUNkO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE9BQU87U0FDZDtLQUNGO0lBS0QsSUFBSSxFQUFFLEVBQUU7SUFLUixPQUFPLEVBQUU7UUFDUCxVQUFVO1lBQ1IsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4RyxDQUFDO0tBQ0Y7SUFDRCxTQUFTLEVBQUU7UUFDVCxRQUFRO1FBQ1IsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBwYWdlcy9pbmRleC9jb21wb25lbnRzL25vdGUvbm90ZS5qc1xuQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIENvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgbm90ZToge1xuICAgICAgdHlwZTogT2JqZWN0XG4gICAgfSxcbiAgICBlZGl0dGluZzoge1xuICAgICAgdHlwZTogQm9vbGVhblxuICAgIH0sXG4gICAgc2VsZWN0ZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW5cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbXBvbmVudCBpbml0aWFsIGRhdGFcbiAgICovXG4gIGRhdGE6IHt9LFxuXG4gIC8qKlxuICAgKiBDb21wb25lbnQgbWV0aG9kc1xuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIHNlbGVjdE5vdGUoKSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudChcInNlbGVjdE5vZGVcIiwgeyBpZDogdGhpcy5wcm9wZXJ0aWVzLm5vdGUuaWQsIHNlbGVjdGVkOiAhdGhpcy5wcm9wZXJ0aWVzLnNlbGVjdGVkIH0pO1xuICAgIH1cbiAgfSxcbiAgbGlmZXRpbWVzOiB7XG4gICAgYXR0YWNoZWQoKSB7XG4gICAgfVxuICB9XG59KVxuIl19