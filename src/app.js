import SocialGithubIcon  from 'icons/social-github.vue'
import IosEmailIcon  from 'icons/ios-email.vue'
import SocialFacebookIcon  from 'icons/social-facebook.vue'
import SocialTwitterIcon  from 'icons/social-twitter.vue'
import SocialLinkedinIcon  from 'icons/social-linkedin.vue'

export default {
  name: 'app',
  components: {
    SocialGithubIcon,
    IosEmailIcon,
    SocialFacebookIcon,
    SocialTwitterIcon,
    SocialLinkedinIcon
  },
  data() {
    return {
      title: 'Vue2-Simplert-Plugin',
      subtitle: 'Vue2-Simplert as Vue.js Plugins By Irfan Maulana',
    }
  },
  methods: {
    open(title, message, type, color, customCloseBtnText, customCloseBtnClass, customClass, customIconUrl) {
      let obj = {
        title: title,
        message: message,
        type: type
      }

      if (customCloseBtnText) {
        obj.customCloseBtnText = customCloseBtnText
      }

      if (customCloseBtnClass) {
        obj.customCloseBtnClass = customCloseBtnClass
      }

      if (customClass) {
        obj.customClass = customClass
      }

      if (customIconUrl) {
        obj.customIconUrl = customIconUrl
      }

      this.$Simplert.open(obj)
    },

    openCustomHtml() {
      let obj = {
        title: 'Custom HTML',
        message: '<span style="color:red;">I am HTML</span>',
        type: 'info'
      }

      this.$Simplert.open(obj)
    },

    onOpen() {
      alert("Hey, I am called when alert is opened")
    },

    onClose() {
      alert('Hey, I am Close Function')
    },

    onConfirm() {
      alert('Hey, You Confirmed')
    },

    openCustomFunction() {
      let obj = {
        title: 'Custom Function',
        message: 'Click close to trigger custom function',
        type: 'info',
        onClose: this.onClose
      }

      this.$Simplert.open(obj)
    },

    openWithOnOpen() {
      let obj = {
        title: 'On Open Function',
        message: 'There should be an alert before you see this',
        type: 'info',
        onOpen: this.onOpen
      }

      this.$Simplert.open(obj)
    },

    openWithConfirm(title, message, isCustomFunction, customConfirmBtnText, customConfirmBtnClass) {
      let obj = {
        title: title,
        message: message,
        type: 'info',
        useConfirmBtn: true,
      }

      if (isCustomFunction) {
        obj.onConfirm = this.onConfirm
      }

      if (customConfirmBtnText) {
        obj.customConfirmBtnText = customConfirmBtnText
      }

      if (customConfirmBtnClass) {
        obj.customConfirmBtnClass = customConfirmBtnClass
      }

      this.$Simplert.open(obj)
    },

    openDisabledOverlayClick() {
      let obj = {
        title: 'Disable Overlay Click',
        message: 'Now You can not close me by clicking overlay',
        type: 'info',
        disableOverlayClick: true
      }

      this.$Simplert.open(obj)
    },

    openWithHiddenButton() {
      let obj = {
        title: 'Hey, I am Title',
        message: 'I am Message',
        type: 'info',
        hideAllButton: true
      }

      this.$Simplert.open(obj)
    },

    openWithXbtn() {
      let obj = {
        title: 'Hey, I am Title',
        message: 'I am Message',
        type: 'info',
        showXclose: true
      }

      this.$Simplert.open(obj)
    },

    openWithStyle() {
      let obj = {
        title: 'Confirmation',
        message: 'Do you want to procced ?',
        customClass: 'custom-simplert',
        customIconUrl: '',
        customCloseBtnText: 'No, Just Close',
        customCloseBtnClass: 'no-procced-btn',
        onClose: this.onClose,
        useConfirmBtn: true,
        customConfirmBtnText: 'Yes, Procced Me',
        customConfirmBtnClass: 'procced-btn',
        onConfirm: this.onConfirm
      }

      this.$Simplert.open(obj)
    },

    callAnotherSimplert() {
      let confirm = () => {
        let obj = {
          title: 'Hey, I am Triggered',
          message: 'You have success open new simplert'
        }
        setTimeout(()=> {
          this.$Simplert.open(obj)
        }, 500);
      }
      let obj = {
        title: 'Open Another Simplert',
        message: 'Click confirm to show another simplert',
        useConfirmBtn: true,
        onConfirm: confirm
      }

      this.$Simplert.open(obj)
    }
  }
}
