const app = Vue.createApp({
    data() {
        return {
            firstName: 'Juan',
            lastName: 'Dela Cruz',
            email: 'jean@email.com',
            gender: 'male',
            photo: 'https://randomuser.me/api/portraits/men/10.jpg' 
        }
    }
});

app.mount('#app')