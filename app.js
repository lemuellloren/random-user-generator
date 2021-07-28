
// TODO: Generate User 
const generateUser = {
    data() {
        return {
            firstName: 'Juan',
            lastName: 'Dela Cruz',
            email: 'juan@email.com',
            gender: 'male',
            phone: '011-962-7516',
            photo: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    }, 
    methods: {
        async getUser() {
              // TODO: Fetch API 
              const res = await fetch('https://randomuser.me/api');
              const { results } = await res.json();
              this.firstName = results[0].name.first
              this.lastName = results[0].name.last
              this.email = results[0].email
              this.gender = results[0].gender
              this.phone = results[0].phone
              this.photo = results[0].picture.thumbnail
          },
      }
}
Vue.createApp(generateUser).mount('#app')
