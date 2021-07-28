const app = Vue.createApp({
    data() {
        return {
            firstName: 'Juan',
            lastName: 'Dela Cruz',
            email: 'jean@email.com',
            gender: 'male',
            photo: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
      async getUser() {
            // TODO: Fetch API 
            const res = await fetch('https://randomuser.me/api');
            const { results } = await res.json();

            
            this.firstName = results[0].name.first
            this.lastName = results[0].name.lastName
            this.email = results[0].email
            this.gender = results[0].gender
            this.photo = results[0].picture.large
        },
    }
})

app.mount('#app')