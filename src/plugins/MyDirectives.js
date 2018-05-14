const MyDirectives = {
    install: function(Vue, options) {
        Vue.directive('focus', {
            inserted: function(element) {
              element.focus()
            }
          })
    }
}

export default MyDirectives