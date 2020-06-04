// components/note-editor/note-editor.js

type IProperty = {}
type IData = {
  editorCtx?: any,
  placeholder?: string,
  readOnly: boolean,
  usingKeyboard: boolean,
  focusing: boolean
}
type ICustom = {
  readOnlyChange: () => void,
  calNavigationBarAndStatusBar: () => void,
  onEditorReady: () => void,
  focus: () => void,
  blur: () => void,
  onStatusChange: (e: any) => void,
  format: (e: any) => void,
  insertDivider: () => void,
  clear: () => void,
  removeFormat: () => void,
  insertDate: () => void,
  insertImage: () => void,
  toggleShowTooltip: (keyboardHeight: number) => void
}

Component<IData, IProperty, ICustom>({
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {
    readOnly: false,
    placeholder: "开始笔记",
    usingKeyboard: false,
    focusing: false
  },

  lifetimes: {
    attached() {
      const platform = wx.getSystemInfoSync().platform
      const isIOS = platform === 'ios'
      this.setData({ isIOS })
      const that = this
      this.toggleShowTooltip(0);
      let keyboardHeight = 0
      wx.onKeyboardHeightChange((res: any) => {
        if (res.height === keyboardHeight) return
        const duration = res.height > 0 ? res.duration * 1000 : 0
        keyboardHeight = res.height
        setTimeout(() => {
          wx.pageScrollTo({
            scrollTop: 0,
            success() {
              that.toggleShowTooltip(keyboardHeight);
              that.data.editorCtx.scrollIntoView()
            }
          })
        }, duration)

      })
    }
  },

  /**
   * Component methods
   */
  methods: {
    readOnlyChange() {
      this.setData({
        readOnly: !this.data.readOnly
      })
    },
    calNavigationBarAndStatusBar() {
      const systemInfo = wx.getSystemInfoSync()
      const { statusBarHeight, platform } = systemInfo
      const isIOS = platform === 'ios'
      const navigationBarHeight = isIOS ? 44 : 48
      return statusBarHeight + navigationBarHeight
    },
    onEditorReady() {
      const that = this
      that.createSelectorQuery().select('#editor').context(function (res: any) {
        that.setData({ editorCtx: res.context });
      }).exec()
    },
    focus() {
      this.setData({ focusing: true })
    },
    blur() {
      this.setData({ focusing: false })
    },
    format(e: any) {
      let { name, value } = e.target.dataset
      if (!name) return
      this.data.editorCtx.format(name, value)

    },
    onStatusChange(e: any) {
      const formats = e.detail
      this.setData({ formats })
    },
    insertDivider() {
      this.data.editorCtx.insertDivider({
        success: function () {
          console.log('insert divider success')
        }
      })
    },
    clear() {
      this.data.editorCtx.clear({
        success: function () {
          console.log("clear success")
        }
      })
    },
    removeFormat() {
      this.data.editorCtx.removeFormat()
    },
    insertDate() {
      const date = new Date()
      const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
      this.data.editorCtx.insertText({
        text: formatDate
      })
    },
    insertImage() {
      const that = this
      wx.chooseImage({
        count: 1,
        success: function (res: any) {
          that.data.editorCtx.insertImage({
            src: res.tempFilePaths[0],
            data: {
              id: 'abcd',
              role: 'god'
            },
            width: '80%',
            success: function () {
              console.log('insert image success')
            }
          })
        }
      })
    },
    toggleShowTooltip(keyboardHeight: number) {
      if (!this.data.focusing) {
        this.setData({ usingKeyboard: false })
        return
      }
      this.setData({ usingKeyboard: keyboardHeight > 0 })
    }
  }
})
