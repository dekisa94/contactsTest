import axios from 'axios'
export default class ContactService
{
    constructor(){
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }
    addContact(contact)
    {
        return axios.post('contacts', contact)
    }
    getAll()
        {
            return axios.get('contacts')
        }
    get(id) {
        return axios.get(`contacts/${id}`)
    }
}
export const contactService = new ContactService()