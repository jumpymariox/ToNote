
// pages/index/components/note/note.js
Component({
  /**
   * Component properties
   */
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

  /**
   * Component initial data
   */
  data: {},

  /**
   * Component methods
   */
  methods: {
    selectNote() {
      this.triggerEvent("selectNode", { id: this.properties.note.id, selected: !this.properties.selected });
    }
  },
  lifetimes: {
    attached() {
    }
  }
})
