<template>
    <div class="flex-div contact-form">
        <span id="contact" class="mb-60"></span>
        <h2 class="h-center">{{ $t('contact.name') }}</h2>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="email">{{ $t('contact.sender') }}</label>
                <input type="email" id="email" v-model="senderEmail" required>
            </div>
            <div class="form-group">
                <label for="subject">{{ $t('contact.topic') }}</label>
                <input type="text" id="subject" v-model="subject" required>
            </div>
            <div class="form-group">
                <label for="content">{{ $t('contact.content') }}</label>
                <textarea id="content" v-model="content" rows="4" required></textarea>
            </div>
            <button type="submit" class="action-btn">{{ $t('contact.send') }}</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "ContactSection",
    data() {
        return {
            senderEmail: '',
            subject: '',
            content: '',
            email: 'brice.folleas@gmail.com'
        };
    },
    methods: {
        sendMail() {
            window.open("mailto:${this.email}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.content)}'", "_blank", "noopener");
        }
    }
};
</script>

<style scoped>
.contact-form {
    margin: auto;
    padding: 20px;
}

form {
    width: 80%;
}

.action-btn {
    margin: 0;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="email"],
input[type="text"],
textarea {
    width: 100%;
    padding: 10px;
    border: 2px solid var(--color-borders);
    border-radius: 1em;
    background-color: var(--color-background-soft);
    color: var(--color-text);
}

input[type="email"]:focus,
input[type="text"]:focus,
textarea:focus {
    outline: none;
    border-color: var(--color-primary);
}

button {
    display: block;
    width: 100%;
}

.action-link {
    color: var(--color-primary);
}
</style>