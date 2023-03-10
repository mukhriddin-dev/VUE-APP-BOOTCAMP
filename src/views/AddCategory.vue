<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Category</h2>
            <form action="#" @submit="addcategory">

                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div class="sm:col-span-2">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter
                            category
                            name</label>
                        <input v-model="categoryname" type="text" name="name" id="name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Enter category name" required="">
                    </div>
                </div>

                <button type="submit"
                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                    Add category
                </button>

            </form>
        </div>
    </section>
</template>
<script>
import { toast } from 'vue3-toastify';

export default {
    name: "addcategory",
    data() {
        return {
            categoryname: ""
        }
    },
    methods: {
        addcategory(e) {
            e.preventDefault();

            if (this.categoryname) {
                this.$store.dispatch('ADD_CATEGORY', {
                    title: this.categoryname
                }).then((response) => {
                    if (response.status == 201) {
                        toast.success('added new category')
                        this.categoryname = ""
                        
                    } else {
                        console.log("404")
                    }
                })

            } else {
                toast.warning('fill category input . . .');
            }

        }
    },

    mounted() {

    },

    computed: {

    },
}
</script>
<style lang="css" scoped></style>