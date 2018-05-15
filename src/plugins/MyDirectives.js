import validator from 'validator'

const MyDirectives = {
    install: function(Vue, options) {
        Vue.directive('focus', {
            inserted: function(element) {
              element.focus()
            }
          })

        const RULES= {
            REQUIRED: 'required',
            NUMBER: 'number',
            EMAIL: 'email'
        }
        const MESSAGES_CLASNAME = 'validator-messages'

        const removeMessageErrorElement = (element) => {
            let oldMessageElement = element.querySelectorAll(`#${MESSAGES_CLASNAME}`)

            oldMessageElement.forEach((oldMessageElement) => {
                oldMessageElement.remove()
            })
        }

        const showMessageErrorElement = (element, message) => {
            let messageElement = document.createElement('div')
            messageElement.id= MESSAGES_CLASNAME
            messageElement.innerHTML = message
            element.appendChild(messageElement)
        }

        Vue.directive('validate', {
            inserted: function(element, binding){


                let validationConfig = binding.value
                let validationRules = validationConfig.validationRules
                
                element.addEventListener('submit', (event) => {
                    let errCounter = 0
                    event.preventDefault()
                    Object.keys(validationRules).forEach(key => {
                        let input = element.querySelector(`#${key}`)

                        if(!input){
                            throw new Error(`Element for validation rule ${key} not found.`)
                        }

                        removeMessageErrorElement(element)

                        if(validationRules[key].indexOf(RULES.EMAIL > -1) && !validator.isEmail(input.value)){
                            errCounter++
                            showMessageErrorElement(element, `It must be email!`)
                        }

                        if(validationRules[key].indexOf(RULES.REQUIRED) > -1 && !input.value.length){
                            errCounter++
                            showMessageErrorElement(element, `${key.toUpperCase()} field is required`)
                        }
                    });

                    if(errCounter === 0)
                    validationConfig.submitCallback()
                    
                })
            }
        }) 
    }
}

export default MyDirectives