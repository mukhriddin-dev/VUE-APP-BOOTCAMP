<template>
    <div id="app" class="container mx-auto">
        <editor v-model="textval" api-key="m4swpl55kfa8j784dr1ob4f42un2ibbh638fyp80e3b7bskz" :init="{
            height: 500,
            menubar: false,
            plugins: [
                'a11ychecker',
                'advlist',
                'advcode',
                'advtable',
                'autolink',
                'checklist',
                'export',
                'lists',
                'link',
                'image',
                'charmap',
                'preview',
                'anchor',
                'searchreplace',
                'visualblocks',
                'powerpaste',
                'fullscreen',
                'formatpainter',
                'insertdatetime',
                'media',
                'table',
                'help',
                'wordcount',
            ],
            toolbar:
                'undo redo | casechange blocks | bold italic backcolor | \
                                                                                alignleft aligncenter alignright alignjustify | \
                                                                                bullist numlst checklist outdent indent | removeformat | a11ycheck code table help',
        }" initial-value="Welcome to TinyMCE Vue" />



        <button class="bg-sky-500 px-3 py-2 rounded-lg" @click="changeText">SUBMIT</button>

    </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
import { toast } from "vue3-toastify";

export default {
    name: "addpost",
    data() {
        return {
            textval: "",
        }
    },

    components: {
        editor: Editor,
    },

    methods: {
        changeText(e) {
        
            this.$store.dispatch('ADD_POST', {
                title: "LOREM LOREM LOREM LOREM LOREM LOREM LOREM",
                category: 'Jamiyat',
                full_text: this.textval
            }).then((response) => {
                if (response.status == 201) {
                    toast.success('new post added successfully')
                } else {
                    console.log("404")
                }
            }).catch((err) => {
                console.log(err)
                toast.error("404")
            })
        }
    }
};
</script>

//s5ftg7ebmvf6msm73ulyic78xezsk5a06a347szqfed72xgg
